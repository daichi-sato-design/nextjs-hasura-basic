import { ChangeEvent, FormEvent, memo, VFC } from 'react'

interface Props {
  printMsg: () => void
}

const Child: VFC<Props> = ({ printMsg }) => {
  return (
    <>
      {console.log('Child rendered')}
      <p>Child Component</p>

      <button
        className="my-3 px-1 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
        onClick={printMsg}
      >
        click
      </button>
    </>
  )
}

export const ChildMemo = memo(Child)
