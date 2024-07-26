import { BiLeftArrowCircle as BackButton } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';

// import { MDXContent } from '@/components/elements/mdx-components';
import { Button } from '@/components/ui/button';

interface AiResponsesProps {
  response: string;
  isAiFinished: boolean;
  onAiFinished: () => void;
  onAiClose: () => void;
}

export default function AiResponses({
  response,
  isAiFinished,
  onAiFinished,
  onAiClose,
}: AiResponsesProps) {
  return (
    <>
      {response ? (
        response?.includes('```') ? (
          // <MDXContent code={response} />
          { response }
        ) : (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(response)
                .callFunction(() => {
                  onAiFinished();
                })
                .start();
            }}
            options={{
              delay: 10,
            }}
          />
        )
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'Oops! The AI seems to be lost. \u00A0 😵‍💫 \u00A0\u00A0',
              )
              .pauseFor(1000)
              .typeString('<br/><br/>')
              .typeString(
                `Looks like the AI has gone on an unscheduled vacation to the Land of Confusion. Hope it brings back some souvenirs of clarity!. \u00A0\u00A0`,
              )
              .pauseFor(1000)
              .typeString('<br/><br/>')
              .typeString('Please try again later. \u00A0')
              .callFunction(() => {
                onAiFinished();
              })
              .start();
          }}
          options={{
            delay: 10,
          }}
        />
      )}

      {isAiFinished && (
        <div className='flex justify-center transition-all duration-300'>
          <Button
            onClick={onAiClose}
            variant={'destructive'}
            data-umami-event='Click Back from AI Response'
          >
            <BackButton className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      )}
    </>
  );
};

