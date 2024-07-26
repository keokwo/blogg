import { Button } from '@/components/ui/button';
import { BiLogoGoogle as GoogleIcon } from 'react-icons/bi';
import { HiOutlineChat as AiIcon } from 'react-icons/hi';


interface QueryNotFoundProps {
  query: string;
  onAskAiAssistant: () => void;
  onFindGoogle: () => void;
}

export default function QueryNotFound({
  query,
  onAskAiAssistant,
  onFindGoogle,
}: QueryNotFoundProps) {
  return (
    <div className='flex flex-col items-center space-y-6 px-5 pb-10 pt-5 '>
      <div className='space-y-2 text-center text-neutral-500'>
        <p>
          No result found about
          <span className='ml-1 mr-2 italic text-neutral-600 dark:text-neutral-400'>
            `{query}`
          </span>
          in this website.
        </p>
        <p className='text-neutral-600 dark:text-neutral-400'>
          Ask my AI Assistant or find in Google instead?
        </p>
      </div>
      <div className='flex w-full flex-col justify-center gap-3 lg:flex-row'>
        <Button
          onClick={onAskAiAssistant}
          variant={'green'}
          className='justify-center p-2'
          data-umami-event='Click Ask AI Assistant'
        >
          <AiIcon size={20} className="mr-2 h-4 w-4" /> Ask AI Assistant
        </Button>
        <Button
          onClick={onFindGoogle}
          variant={'indigo'}
          className='justify-center p-2'
          data-umami-event='Click Find in Google'
        >
          <GoogleIcon size={20} className="mr-2 h-4 w-4" />
          Find in Google
        </Button>
      </div>
      <p className='text-sm p-2 text-neutral-500'>
        Press `ESC` to close this window
      </p>
    </div>
  );
};
