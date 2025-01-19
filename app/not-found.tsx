import Image from "next/image";
import {Button} from "@/components/ui/button";
import {APP_NAME} from "@/lib/constants";
import Link from "next/link";

const NotFound = () => {
    return <div className='flex flex-col items-center justify-center min-h-screen'>
        <Image src='/images/logo.svg' width={48} height={48} alt={`${APP_NAME} logo`} />
        <div className='w-1/3 p-6 rounded-lg shadow-md text-center mt-4'>
            <h1 className='uppercase text-3xl font-bold mb-4'>Page Not Found</h1>
            <p className='mb-4'>Could not find requested page</p>
            <Button asChild variant='outline'>
                <Link href='/'>Back to homepage</Link>
            </Button>
        </div>
    </div>
};

export default NotFound;