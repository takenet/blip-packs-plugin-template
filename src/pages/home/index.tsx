import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/contexts/AppContext';
import { GetResource, NextStep, SendTrackingEvent, SetResources, StepBack } from 'src/services/SelfOnboarding';
import { HomeContainer } from './styles';

export const Home: React.FC = () => {
    const { isSelfOnboarding } = useAppContext();
    const [tipoTela, setTipoTela] = useState<string>('');

    useEffect(() => {
        setTipoTela(isSelfOnboarding ? 'SelfOnboarding' : 'Central de Packs');
    }, [isSelfOnboarding, setTipoTela]);

    const handleGetResource = async () => {
        const resource = await GetResource('recurso_teste');
        console.log('Recurso recuperado: ', resource);
    };

    const handleSetResources = async () => {
        const status = await SetResources([
            {
                name: 'recurso1',
                value: 'RECURSO 1',
                type: 'application/txt',
            },
            {
                name: 'recurso2',
                value: '{"valor": 1.00}',
                type: 'application/json',
            },
        ]);

        console.log('Recurso setado', status);
    };

    const handleSendTracking = async () => {
        await SendTrackingEvent('meu-evento-da-minha-secao', {
            buttonName: 'sendtracking',
        });
    };

    const handleMoveNext = async () => {
        await NextStep();
    };
    const handleMovePrevious = async () => {
        await StepBack();
    };

    return (
        <HomeContainer>
            <bds-paper elevation="secondary">
                <h1>Plugin de configuração</h1>
                {/* <bds-tabs>
                    <bds-tab group="tab1" label="Basic settings"></bds-tab>
                    <bds-tab group="tab2" label="Advanced settings"></bds-tab>
                    <bds-tab group="tab3" label="Very advanced settings para testes de tamanho"></bds-tab>
                    <bds-tab group="tab4" label="Personal settings"></bds-tab>
                    <bds-tab group="tab5" label="Common settings"></bds-tab>
                </bds-tabs>
                <bds-tab-panel group="tab1">
                    <bds-typo class="hydrated">Basic settings</bds-typo>
                </bds-tab-panel>
                <bds-tab-panel group="tab2"><bds-typo class="hydrated">Advanced settings</bds-typo></bds-tab-panel>
                <bds-tab-panel group="tab3"><bds-typo class="hydrated">Veryadvanced settings para testes de tamanho</bds-typo></bds-tab-panel>
                <bds-tab-panel group="tab4"><bds-typo class="hydrated">Personal settings</bds-typo></bds-tab-panel>
                <bds-tab-panel group="tab5"><bds-typo class="hydrated">Common settings</bds-typo></bds-tab-panel> */}
                <span>
                    <strong>Tela: {tipoTela}</strong>
                </span>
                <br />
                <h3>Exemplo de eventos:</h3>
                <div id="buttons">
                    <bds-button onClick={handleGetResource}>Get Resource</bds-button>
                    &nbsp;&nbsp;
                    <bds-button onClick={handleSetResources}>Set Resource</bds-button>
                    &nbsp;&nbsp;
                    <bds-button onClick={handleSendTracking}>Send Tracking</bds-button>
                    &nbsp;&nbsp;
                    <bds-button onClick={handleMoveNext}>Next Step</bds-button>
                    &nbsp;&nbsp;
                    <bds-button onClick={handleMovePrevious}>Step Back</bds-button>
                </div>
            </bds-paper>
        </HomeContainer>
    );
};
