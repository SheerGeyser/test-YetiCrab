import React from 'react'
import styled from 'styled-components'

export function Input() {


    const Wrapper = styled.div`
    max-width: 1200px;
    min-height: 110px;
    max-height: 120px;
    background-color: #D8D8D8;
    display: flex;
    margin-top: 1em;
    margin-bottom: 1em;
    `;
    const InputWrapper = styled.div`
    padding: 10px;
    `;
    const Input = styled.input`
    width: 100%;      
    text-align: center;
    height: -webkit-fill-available;  
    `;
    const DuoInput = styled.input`
    width: 100%;
    height: 39%;  
    text-align: center;
    &:first-child {
        margin-bottom: 10px;
    }
    `;

    const TextArea = styled.textarea`
    text-align: left;
    max-height: 95px;
    height: 95px;
    max-width: 600px;
    `;

    const AddBtn = styled.button`
    background-color: #55EFC4;
    text-transform: uppercase;
    color: white;
    border: none;
    width: 100%;
    height: 50%;
    `;

    const ClearBtn = styled(AddBtn)`
    background-color: #FF7675;
    `;


    return (
        <>
            <Wrapper>
                <InputWrapper><Input type="text" placeholder='Номер заявки' /></InputWrapper>
                <InputWrapper>
                    <DuoInput type="text" placeholder='Название фирмы клиента' />
                    <DuoInput type="text" placeholder='Дата и время получения заявки от клиента' />
                </InputWrapper>
                <InputWrapper>
                    <TextArea type="text" placeholder='Комментарии' />
                </InputWrapper>
                <InputWrapper>
                    <DuoInput type="text" placeholder='ФИО перевозчика' />
                    <DuoInput type="text" placeholder='Контактный телефон перевозчика' />
                </InputWrapper>
                <InputWrapper>
                    <Input type="text" placeholder='Номер заявки' />
                </InputWrapper>

                <InputWrapper>
                    <AddBtn>Add</AddBtn>
                    <ClearBtn>Clear</ClearBtn>
                </InputWrapper>


            </Wrapper>

        </>
    )
}
