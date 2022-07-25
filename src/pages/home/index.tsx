import React from 'react';
import { GetResource, SendTrackingEvent, SetResources } from 'src/services/SelfOnboarding';
import { HomeContainer } from './styles';

export const Home: React.FC = () => {
    const handleGetResource = async () => {
        const resource = await GetResource('recurso_teste');
        console.log('Recurso recuperado: ', resource);
    };

    const handleSetResources = async () => {
        await SetResources([
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
    };

    const handleSendTracking = async () => {
        await SendTrackingEvent('meu-evento-da-minha-secao', {
            buttonName: 'sendtracking',
        });
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
                <h3>Exemplo de eventos:</h3>
                <button onClick={handleGetResource}>Get Resource</button>
                &nbsp;&nbsp;
                <button onClick={handleSetResources}>Set Resource</button>
                &nbsp;&nbsp;
                <button onClick={handleSendTracking}>Send Tracking</button>
            </bds-paper>
        </HomeContainer>
    );
};
