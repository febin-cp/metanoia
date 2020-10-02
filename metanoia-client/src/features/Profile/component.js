import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import _get from 'lodash/get';
// import queryString from 'query-string';
// import _isEmpty from 'lodash/isEmpty';
// import { companyLogos, DummyDocCards } from '../../../../constants';
// import ProgressBar from '../../../CommonTemplates/ProgressBar';
// import PhoneSubmitForm from '../RightPanelForm';
// import MobilePhoneSubmitForm from '../RightPanelForm/mobile';
// import LoginOptionView from '../LeftPanel/LoginOptionView';
// import CardFormTemp from '../SingleCards';
// import MobileCardFormTemp from '../SingleCards/mobile';
// import SubmitForm from '../SubmitForm/component';
import {
    MainDash, BaseImage, ImageDiv, ImageMid
} from './styles';


class Profile extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        // const handler = e => this.setState({ matches: e.matches });
        // window.matchMedia("(min-width: 1024px)").addListener(handler);
        // let params = queryString.parse(this.props.location.search)
        // this.props.getLoginDetails(params);
    }

    // submit = values => {
    //     console.log('values', values);
    // }

    render() {
        return (
            <Fragment>
                <MainDash>
                    <BaseImage>
                        <ImageDiv src = {require('../../assets/comp.png')} alt="we"/>
                    </BaseImage>
                    <BaseImage>
                        <ImageMid src = {require('../../assets/myself.png')} alt="we"/>
                        <BaseImage>
                            Metanoia
                        </BaseImage>
                    </BaseImage>
                    <BaseImage>
                        <ImageDiv src = {require('../../assets/pot.png')} alt="we"/>
                    </BaseImage>
                </MainDash>
            </Fragment>
        );
    }
}

export default Profile;
