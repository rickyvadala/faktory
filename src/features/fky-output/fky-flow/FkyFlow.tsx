import './FkyFlow.css'

export const FkyFlow = () => {
  const flow = [
      {id: 1, do: 'Record', with: 'GPT3'},
      {id: 2, do: 'Transcribe', with: 'Whisper'},
      {id: 3, do: 'Translate', with: 'GPT3'},
      {id: 4, do: 'Voice Over', with: 'Play.ht'},
      {id: 5, do: 'Output', with: 'Youtube'},
  ]

  return (
      <div className={'fky-flow'} >
        <ul className={'fky-flow_list'}>
            {flow.map(e => (
                <li key={e.id} className={'fky-flow_item'}>
                    {e.do} ➔ {e.with}
                </li>
            ))}
        </ul>
      </div>
  )
}
