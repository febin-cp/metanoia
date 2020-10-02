import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import _get from 'lodash/get';
import {
    MainDash, BaseImage, ImageDiv, ImageMid, BaseText,
    SubDash
} from './styles';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';


class Profile extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <MainDash>
                    <BaseImage>
                        <ImageDiv src={require('../../assets/comp.png')} alt="we" />
                    </BaseImage>
                    <BaseImage>
                        <ImageMid src={require('../../assets/myself.png')} alt="we" />
                        <BaseText>
                            Metanoia
                        </BaseText>
                    </BaseImage>
                    <BaseImage>
                        <ImageDiv src={require('../../assets/pot.png')} alt="we" />
                    </BaseImage>
                </MainDash>
                <SubDash>
                    <BaseImage>
                        <ImageMid src={require('../../assets/myself.png')} alt="we" />
                        <BaseText>
                            Metanoia
                        </BaseText>
                    </BaseImage>
                    <BaseImage>
                        <ImageDiv src={require('../../assets/pot.png')} alt="we" />
                    </BaseImage>
                </SubDash>
                <Footer/>
            </Fragment>
        );
    }
}

export default Profile;
