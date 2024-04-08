const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // and include its associated Products
  try {
    const categoryData =  await Category.findAll({
      include: [{model: Product}]});
    res.status(200).json(categoryData);
    
  } catch (error) {
    //if error return error
    res.status(500).json(err);
    
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // and include its associated Products
  try {
    const categoryData =  await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    if(!categoryData)
    {
      res.status(404).json({message: 'no category found'});
      return;
    }
    res.status(200).json(categoryData);
    
  } catch (error) {
    //if error return error
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData =  await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    //if error return error
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData =  await Category.update(
      {
        // All the fields you can update and the data attached to the request body.
        category_name: req.body.category_name
      },
      {
        // Gets a category based on the category_id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    );
    if(!categoryData)
    {
      res.status(404).json({message: 'no category found for that id'});
      return;
    }
    res.status(200).json(categoryData);

    
  } catch (error) {
    //if error return error
    res.status(500).json(error);
    
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {id: req.params.id}
    });

    if (!categoryData)
    {
      res.status(404).json({message: 'no category found with this id'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    //if error return error
    res.status(500).json(error);
    
  }
});

module.exports = router;
