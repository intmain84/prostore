'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useActionState } from 'react';
import { singInWithCredentials } from '@/lib/actions/user.actions';

const CredentialsSignInForm = () => {
  const [data, action, isPending] = useActionState(singInWithCredentials, {
    success: false,
    message: '',
  });

  return (
    <form action={action}>
      <div className='space-y-6'>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            required
            autoComplete='email'
            defaultValue=''
          />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='password'
            defaultValue=''
          />
        </div>
        {!data?.success && (
          <div className='text-destructive'>{data?.message}</div>
        )}
        <div>
          <Button disabled={isPending} className='w-full' variant='default'>
            {isPending ? 'Loading...' : 'Sign In'}
          </Button>
        </div>
        <div className='text-center text-sm text-muted-foreground'>
          Dont have an account? <Link href='/sign-up'>Sign Up</Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
