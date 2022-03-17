const {
    Product,
    Category,
    Bucket,
    User
} = require('../models/index');
const {
    Op
} = require('sequelize');

const {
    sequelize
} = require("../models");

const roundedNumber = require('../helper/roundedNumber')

class ProductController {
    static async getProduct(req, res, next) {
        try {
            const products = await Product.findAll({
                where: {
                    stock: {
                        [Op.gt]: 0,
                    }
                },
                include: [{
                    model: Category,
                    as: "Category",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    },
                }],
                attributes: {
                    exclude: ["createdAt", "updatedAt", "categoryId"]
                },
                order: [
                    ['id', 'ASC']
                ]
            });
            res.status(200).json(products);
        } catch (err) {
            next(err)
        }
    }

    static async getCategories(req, res, next) {
        try {
            const categories = await Category.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                order: [
                    ['id', 'ASC']
                ]
            });
            res.status(200).json(categories);
        } catch (err) {
            next(err)
        }
    }

    static async getBucket(req, res, next) {
        try {
            const userId = req.user.id
            const bucket = await Bucket.findAll({
                where: {
                    UserId: userId,
                    status: false
                },
                include: [{
                        model: Product,
                        as: "Product",
                        include: [{
                            model: Category,
                            as: "Category",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                        }],
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "categoryId"]
                        }
                    },
                    {
                        model: User,
                        as: "User",
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "password"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt", "UserId", "ProductId"]
                },
            })
            res.status(200).json(bucket);
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async buyProduct(req, res, next) {
        try {
            let {
                idBucket
            } = req.body;

            const t = await sequelize.transaction();

            // pagil tax dari process.env
            const tax = +process.env.BASICTAX;
            const importTax = +process.env.IMPORTTAX

            let total = 0;
            let salesTax = 0;
            let receipt = {
                products: [],
            };


            for (const el of idBucket) {
                let bucket = await Bucket.findByPk(+el);
                const idProduct = bucket.ProductId;
                const product = await Product.findOne({
                    where: {
                        id: idProduct
                    },
                    include: [{
                        model: Category,
                        as: "Category"
                    }]
                }, {
                    transaction: t
                });

                if (product.stock >= bucket.items) {

                    // update status bucket
                    await Bucket.update({
                        status: true
                    }, {
                        where: {
                            id: +el
                        }
                    }, {
                        transaction: t
                    });

                    // update stock product
                    await Product.update({
                        stock: product.stock - bucket.items
                    }, {
                        where: {
                            id: idProduct
                        }
                    }, {
                        transaction: t
                    });

                    // create receipt
                    if (product.Category.tax && product.import) {
                        let priceTax = bucket.items * product.price * tax / 100;
                        priceTax = +roundedNumber(priceTax);
                        let priceImportTax = bucket.items * product.price * importTax / 100;
                        priceImportTax = +roundedNumber(priceImportTax);
                        let price = product.price + priceTax + priceImportTax;
                        receipt.products.push({
                            name: product.name,
                            price: price.toFixed(2),
                            items: bucket.items
                        })
                        salesTax += priceTax
                        salesTax += priceImportTax
                        total += price
                    } else if (product.import) {
                        let priceImportTax = bucket.items * product.price * importTax / 100;
                        priceImportTax = +roundedNumber(priceImportTax);
                        let price = product.price + priceImportTax;
                        receipt.products.push({
                            name: product.name,
                            price: price.toFixed(2),
                            items: bucket.items
                        })
                        salesTax += priceImportTax
                        total += price
                    } else if (product.Category.tax) {
                        let priceTax = bucket.items * product.price * tax / 100;
                        priceTax = +roundedNumber(priceTax)
                        let price = priceTax + product.price;
                        receipt.products.push({
                            name: product.name,
                            price: price.toFixed(2),
                            items: bucket.items
                        })
                        salesTax += priceTax
                        total += price
                    } else {
                        receipt.products.push({
                            name: product.name,
                            price: product.price.toFixed(2),
                            items: bucket.items
                        })
                        total += product.price
                    }
                    receipt.salesTax = salesTax.toFixed(2)
                    receipt.total = total.toFixed(2)
                } else {
                    throw {
                        name: "can't buy because stock is not available"
                    }
                }
            };

            await t.commit();
            res.status(200).json(receipt)
        } catch (err) {
            console.log(err)
            // await t.rollback();
            next(err)
        }
    }

    static async addProduct(req, res, next) {
        try {
            const input = {
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                import: req.body.import,
                categoryId: req.body.categoryId,
            }

            const product = await Product.create(input)
            res.status(201).json({
                name: product.name,
                price: product.price,
                stock: product.stock,
                import: product.import
            })
        } catch (err) {
            next(err)
        }
    }

    static async addToBucket(req, res, next) {
        try {
            const userId = req.user.id;
            const productId = req.params.id
            const product = await Product.findByPk(productId)
            if (!product) {
                throw {
                    name: 'Product not found'
                }
            }
            const bucket = await Bucket.findOne({
                where: {
                    UserId: userId,
                    ProductId: productId,
                    status: false,
                }
            })
            if (bucket) {
                const update = await Bucket.update({
                    items: bucket.items + 1
                }, {
                    where: {
                        id: bucket.id
                    }
                })
                res.status(200).json({
                    message: "Your bucket is Update"
                })
            } else {
                const newBucket = await Bucket.create({
                    UserId: userId,
                    ProductId: productId,
                    items: 1,
                    status: false,
                })
                res.status(200).json({
                    message: "Your bucket is create"
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static async deleteBucket(req, res, next) {
        try {
            const bucketId = req.params.id
            const bucket = await Bucket.findByPk(bucketId)
            if (!bucket) {
                throw {
                    name: "Bucket not found"
                }
            }

            const deleted = await Bucket.destroy({
                where: {
                    id: bucketId
                }
            })
            res.status(200).json({
                message: "Bucket is deleted"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = ProductController