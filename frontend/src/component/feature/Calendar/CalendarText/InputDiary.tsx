type InputDiaryProps = {
  textAreaRef: React.RefObject<HTMLTextAreaElement>
}

export const InputDiary = ({
  textAreaRef,
}: InputDiaryProps) => {
  return (
    <div className='mt-2'>
      <textarea
        id='about'
        name='about'
        rows={3}
        ref={textAreaRef}
        className='
          block h-44 w-full rounded-md
          border-0 bg-slate-300 py-1.5
          text-gray-900 shadow-sm ring-1
          ring-inset ring-gray-300
          placeholder:text-gray-400 focus:ring-2
          focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
        '
      />
    </div>
  )
}
