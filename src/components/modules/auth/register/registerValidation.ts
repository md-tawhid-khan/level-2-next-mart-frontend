import * as z from 'zod';

export const RegisterValidation=z.object({
    name:z.string('first name is required').min(2,'at least two character').max(20, "maximum twenty character"),
    email:z.email('must be email include'),
    password:z.string('password is required').min(8,'password minimum eight character'),
    passwordConfirm:z.string('password confirm is  required').min(8)
})