import React from 'react'
import styled from 'styled-components';

export function DataSection(props) {

    const Wrapper = styled.div`
        flex: 10;
        width: 100%;
        max-width: 1200px;
        min-height: 110px;
        max-height: 120px;
        background-color: #D8D8D8;
        display: flex;
        margin-top: .3em;
        margin-bottom: .3em;

        
    `;
    const InputWrapper = styled.div`
    padding: 10px;
    align-self: center;

    &:last-child {
        margin-right: 10px;
    }
    `;
    const Data = styled.div`
    align-self: center;
    width: 100%;      
    height: -webkit-fill-available;  
    `;
    const DuoData = styled.div`
    width: 100%;
    height: 39%;  
    &:first-child {
        margin-bottom: 10px;
    }
    `;

    const Text = styled.p`
    text-align: center;
    align-self: center;
    white-space: wrap;
    line-break: anywhere;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    `;

    const TextArea = styled.textarea`
    width: 100%;
    height: inherit;
    max-height: 100px;
    max-width: 333px;
    resize: none;
    `;

    const DellBtn = styled.button`
    background-color: #FF7675;
    text-transform: uppercase;
    color: white;
    border: none;
    margin-left: 10px;
    align-self: center;
    height: 120px
    `;

    const SectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 110px;
    display: flex;
    `;




    return (
        <SectionWrapper>
            <Wrapper>
                <InputWrapper style={{ flex: 1 }}>
                    <Data>
                        <Text><span>№</span>12345</Text>
                    </Data>
                </InputWrapper>
                <InputWrapper style={{ flex: 2 }}>
                    <DuoData>
                        <Text>{props.text}</Text>
                    </DuoData>
                    <DuoData>
                        <Text>12.12.2012</Text>
                    </DuoData>
                </InputWrapper>
                <InputWrapper style={{ flex: 3 }}>
                    <Data>
                        <TextArea>Коммента́рий (лат. commentārius — заметки, записки; толкование) — пояснения к тексту, рассуждения, замечания о чём-нибудь или в Интернете — к посту (сообщению).</TextArea>
                    </Data>
                </InputWrapper>
                <InputWrapper style={{ flex: 3 }}>
                    <DuoData>
                        <Text>Константин Константинович Константинов</Text>
                    </DuoData>
                    <DuoData >
                        <Text>+7 (922) 14-16-235</Text>
                    </DuoData>
                </InputWrapper>
                <InputWrapper style={{ flex: 1, textAlign: `center` }}>
                    <Data >
                        <a href="/">12345</a>
                    </Data>
                </InputWrapper>
                <InputWrapper style={{ textAlign: `center` }}>
                </InputWrapper>

            </Wrapper>
            <DellBtn>
                DELL
            </DellBtn>
        </SectionWrapper>
    )
}
