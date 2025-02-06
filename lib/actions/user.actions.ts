'use server';

import { singInFormSchema } from '@/lib/validators';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export type User = {
  email: string;
  password: string;
};

export async function singInWithCredentials(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user: User = singInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Invalid email or password' };
  }
}

export async function signOutUser() {
  await signOut();
}
