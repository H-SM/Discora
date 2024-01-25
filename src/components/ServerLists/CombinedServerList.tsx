import TextServer from './TextServer'
import TitleSection from './TitleSection'
import VoiceServer from './VoiceServer'

const CombinedServerList = () => {
    return (
        <div className='flex flex-col w-full h-fit overflow-x-auto'>
            <TitleSection title={"text channels"}/>
            <TextServer title={"general"}/>
            <TextServer title={"private"}/>
            <TitleSection title={"Video channels"}/>
            <VoiceServer title={"VC 1"}/>
            <VoiceServer title={"VC 2"}/>
        </div>
    )
}

export default CombinedServerList
