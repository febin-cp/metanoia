import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import _get from 'lodash/get';
import {
    MainDash, BaseImage, ImageDiv, ImageMid, BaseText,
    SubDash, ImageInsta, Desc
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
                <SubDash style = {{marginBottom: "-150px"}}>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/social.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">We grew up screaming “look there are fireflies!!“when you see tiny fires among the bushes at night.
But I am scared on the thought of what fires will my children get to see late at night.😓</div>
                    </div>
                    </BaseImage>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/tent.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">WSome people are beyond words to explain.
And I have seen people call each others their best friends their crime partner their companion and so on.
Who is a best friend to you?..
</div>
                    </div>
                    </BaseImage>
                </SubDash>
                <SubDash style = {{marginBottom: "-150px"}}>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3" >
                            <ImageInsta src={require('../../assets/stars.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">We grew up screaming “look there are fireflies!!“when you see tiny fires among the bushes at night.
But I am scared on the thought of what fires will my children get to see late at night.😓</div>
                    </div>
                    </BaseImage>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/couplef.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">WSome people are beyond words to explain.
And I have seen people call each others their best friends their crime partner their companion and so on.
Who is a best friend to you?..
</div>
                    </div>
                    </BaseImage>
                </SubDash>
                <SubDash style = {{marginBottom: "-150px"}}>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/social.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">We grew up screaming “look there are fireflies!!“when you see tiny fires among the bushes at night.
But I am scared on the thought of what fires will my children get to see late at night.😓</div>
                    </div>
                    </BaseImage>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/tent.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">WSome people are beyond words to explain.
And I have seen people call each others their best friends their crime partner their companion and so on.
Who is a best friend to you?..
</div>
                    </div>
                    </BaseImage>
                </SubDash>
                <SubDash style = {{marginBottom: "-150px"}}>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/social.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">We grew up screaming “look there are fireflies!!“when you see tiny fires among the bushes at night.
But I am scared on the thought of what fires will my children get to see late at night.😓</div>
                    </div>
                    </BaseImage>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/tent.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">WSome people are beyond words to explain.
And I have seen people call each others their best friends their crime partner their companion and so on.
Who is a best friend to you?..
</div>
                    </div>
                    </BaseImage>
                </SubDash>
                <SubDash style = {{marginBottom: "-150px"}}>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/social.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">We grew up screaming “look there are fireflies!!“when you see tiny fires among the bushes at night.
But I am scared on the thought of what fires will my children get to see late at night.😓</div>
                    </div>
                    </BaseImage>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/tent.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">WSome people are beyond words to explain.
And I have seen people call each others their best friends their crime partner their companion and so on.
Who is a best friend to you?..
</div>
                    </div>
                    </BaseImage>
                </SubDash>
                <SubDash>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/social.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">We grew up screaming “look there are fireflies!!“when you see tiny fires among the bushes at night.
But I am scared on the thought of what fires will my children get to see late at night.😓</div>
                    </div>
                    </BaseImage>
                    <BaseImage>
                    <div className = "row">
                        <div className = "col-md-3">
                            <ImageInsta src={require('../../assets/tent.png')} alt="we" />
                        </div>
                        <div className = "col-md-6">WSome people are beyond words to explain.
And I have seen people call each others their best friends their crime partner their companion and so on.
Who is a best friend to you?..
</div>
                    </div>
                    </BaseImage>
                </SubDash>
                <Footer/>
            </Fragment>
        );
    }
}

export default Profile;
