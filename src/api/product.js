import express from 'express';
import {models} from '../models';
const Product = models.Product;
const router = express.Router();

/*
 List products 
 params: 
	start: int
	limit:	int
*/
router.get('/', (req,res) => {
	Product.findAll({
		offset: req.params.start || 0,
		limit: req.params.limit || 10
	}).then(products => {
		res.json(products);
	})
});

module.exports = router;