import './App.css';
import { Input } from './components/Input'
import styled from 'styled-components';
import { DataSection } from './components/DataSection';

function App() {

  const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

  const InputWrapper = styled(SectionWrapper)`
  position: fixed;
  bottom: 0;
  width: 100%;
  `

  return (
    <>
      <SectionWrapper>
        <DataSection text='ooo ROGA I COPITA' />
        <DataSection text='ooo ROGA I COPITA' />
        <DataSection text='ooo ROGA I COPITA' />
        <DataSection text='oooasdaITA' />
        <DataSection text='oooasdasdassssss ddddddd dddddddITA' />
        <DataSection text='oasdTA' />
        <DataSection text='ooo ROGA I COPITA' />
        <DataSection text='ooo ROGA I COPITA' />
        <DataSection text='ooo ROGA I COPITA' />
        <DataSection text='ooo ROGA I COPITA' />
      </SectionWrapper>

      <InputWrapper>
        <Input />
      </InputWrapper>
    </>
  );
}

export default App;
