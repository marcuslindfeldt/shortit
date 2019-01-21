import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components/macro';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { TinyUrlContext } from './TinyUrls';

import UrlInput from './UrlInput';

import SubmitButton from './SubmitButton';

import { spacingPico, spacingSmall, spacingBase } from './variables';

const FormGroup = styled.div`
  width: 100%;
  padding: 0 ${spacingBase};
`;

const StyledForm = styled(Form)`
  width: 100%;
  padding: ${spacingBase};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 44rem) {
    max-width: 40rem;
  }
`;

const CREATE_LINK_MUTATION = gql`
  mutation createTinyUrlMutation($url: String!) {
    createTinyUrl(url: $url) {
      id
      url
    }
  }
`;

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .url('Enter a valid url')
    .required('A link is required!'),
});

const StyledErrorMessage = styled.span`
  margin-left: ${spacingSmall};
  margin-top: ${spacingPico};
  display: block;
`;

const CreateLink = () => (
  <TinyUrlContext.Consumer>
    {({ add }) => (
      <Mutation mutation={CREATE_LINK_MUTATION}>
        {mutate => (
          <Formik
            initialValues={{ url: '' }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values, { setSubmitting, setFieldValue }) => {
              setSubmitting(true);
              const res = await mutate({ variables: { url: values.url } });
              add(res.data.createTinyUrl);
              setFieldValue('url', '');
              setSubmitting(false);
            }}
            render={({ isSubmitting }) => (
              <StyledForm noValidate autoComplete="off">
                <FormGroup>
                  <Field
                    type="url"
                    name="url"
                    aria-label="paste link here"
                    required
                    render={({ field }) => <UrlInput {...field} placeholder="paste link here*" />}
                  />
                  <ErrorMessage component={StyledErrorMessage} name="url" />
                </FormGroup>
                <SubmitButton type="submit" label="Shorten!" disabled={isSubmitting} />
              </StyledForm>
            )}
          />
        )}
      </Mutation>
    )}
  </TinyUrlContext.Consumer>
);

export default CreateLink;
