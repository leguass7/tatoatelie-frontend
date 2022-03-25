import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import { ObjectSchema, ValidationError } from 'yup'

export function validate(schema: ObjectSchema<any>, abortEarly?: boolean) {
  return async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    const invalid = (msg?: string[]) => {
      let message = msg || 'invalid data'
      if (msg.length === 1) message = msg[0]
      res.status(400).json({ success: false, message })
    }

    try {
      await schema.validate(req?.body, { abortEarly: !!abortEarly })
      next()
    } catch (err) {
      const validationErrors = []
      if (err instanceof ValidationError) {
        if (abortEarly) validationErrors.push(err?.message || 'erro nulo')
        else err?.inner.forEach(error => validationErrors.push(error.message))

        return invalid(validationErrors)
      }
      return next(err)
    }
  }
}
