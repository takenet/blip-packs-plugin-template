import { BdsPaper } from 'blip-ds/dist/blip-ds-react';
import React from 'react';
import { HomeContainer } from './styles';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <BdsPaper elevation="secondary">
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
            </BdsPaper>
        </HomeContainer>
    );
};
