import { body, validationResult } from 'express-validator';

const validateJob = [
  body('title').isString().trim().notEmpty().withMessage('Title is required'),
  body('company').isString().trim().notEmpty().withMessage('Company is required'),
  body('type').isString().trim().notEmpty().withMessage('Type is required'),
  body('location').isString().trim().notEmpty().withMessage('Location is required'),
  body('description').isString().trim().notEmpty().withMessage('Description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validateJob };
