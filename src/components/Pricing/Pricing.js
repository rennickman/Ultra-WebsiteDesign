import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import { Button } from '../../GlobalStyles';
import { PricingCard, PricingCardCost, PricingCardFeature, PricingCardFeatures, PricingCardIcon, PricingCardInfo, PricingCardLength, PricingCardPlan, PricingContainer, PricingHeading, PricingSection, PricingWrapper } from './PricingElements';


const Pricing = () => {

    return (
        <>
            <IconContext.Provider value={{ coloe: '#a9b3c1', size: 64 }}>
                <PricingSection>
                    <PricingWrapper>
                        <PricingHeading>Our Services</PricingHeading>
                        <PricingContainer>

                            <PricingCard to="sign-up">
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiRock />
                                    </PricingCardIcon>
                                    <PricingCardPlan>StarterPack</PricingCardPlan>
                                    <PricingCardCost>$99.99</PricingCardCost>
                                    <PricingCardLength>per month</PricingCardLength>
                                    <PricingCardFeatures>
                                        <PricingCardFeature>100 New Users</PricingCardFeature>
                                        <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                        <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                                    </PricingCardFeatures>
                                    <Button primary>Choose Plan</Button>
                                </PricingCardInfo>
                            </PricingCard>

                            <PricingCard to="sign-up">
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiCrystalBars />
                                    </PricingCardIcon>
                                    <PricingCardPlan>Gold Rush</PricingCardPlan>
                                    <PricingCardCost>$299.99</PricingCardCost>
                                    <PricingCardLength>per month</PricingCardLength>
                                    <PricingCardFeatures>
                                        <PricingCardFeature>1000 New Users</PricingCardFeature>
                                        <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                                        <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                                    </PricingCardFeatures>
                                    <Button primary>Choose Plan</Button>
                                </PricingCardInfo>
                            </PricingCard>

                            <PricingCard to="sign-up">
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <GiCutDiamond />
                                    </PricingCardIcon>
                                    <PricingCardPlan>DiamondKings</PricingCardPlan>
                                    <PricingCardCost>$59.99</PricingCardCost>
                                    <PricingCardLength>per month</PricingCardLength>
                                    <PricingCardFeatures>
                                        <PricingCardFeature>Unlimited Users</PricingCardFeature>
                                        <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                                        <PricingCardFeature>24/7 Support</PricingCardFeature>
                                    </PricingCardFeatures>
                                    <Button primary>Choose Plan</Button>
                                </PricingCardInfo>
                            </PricingCard>

                        </PricingContainer>
                    </PricingWrapper>
                </PricingSection>
            </IconContext.Provider> 
        </>
    );
};

export default Pricing;
