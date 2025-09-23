import * as z from 'zod';

export const LoginValidation=z.object({
    email:z.email('must be email include'),
    password:z.string('password is required').min(8,'password minimum eight character'),
})