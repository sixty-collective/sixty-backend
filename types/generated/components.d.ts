import type { Attribute, Schema } from '@strapi/strapi';

export interface PageEmbed extends Schema.Component {
  collectionName: 'components_page_embeds';
  info: {
    description: '';
    displayName: 'Embed';
  };
  attributes: {
    embed: Attribute.Enumeration<
      ['donorbox', 'testimonialList', 'testimonialSubmission', 'contact']
    >;
  };
}

export interface PageFaq extends Schema.Component {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    qa: Attribute.Component<'page.qa', true>;
  };
}

export interface PageImage extends Schema.Component {
  collectionName: 'components_page_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageQa extends Schema.Component {
  collectionName: 'components_page_qas';
  info: {
    displayName: 'qa';
  };
  attributes: {
    answer: Attribute.Text;
    question: Attribute.String;
  };
}

export interface PageText extends Schema.Component {
  collectionName: 'components_page_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface SharedImages extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'images';
  };
  attributes: {};
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedTestComponent extends Schema.Component {
  collectionName: 'components_shared_test_components';
  info: {
    displayName: 'Test Component';
  };
  attributes: {
    Test: Attribute.String;
  };
}

export interface SharedWorkSample extends Schema.Component {
  collectionName: 'components_shared_work_samples';
  info: {
    description: '';
    displayName: 'Work Sample';
  };
  attributes: {
    description: Attribute.Text;
    embed: Attribute.Boolean & Attribute.DefaultTo<false>;
    embedLink: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
    name: Attribute.String;
    profile: Attribute.Relation<
      'shared.work-sample',
      'oneToOne',
      'api::profile.profile'
    >;
    work_sample_disciplines: Attribute.Relation<
      'shared.work-sample',
      'oneToMany',
      'api::work-sample-discipline.work-sample-discipline'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.embed': PageEmbed;
      'page.faq': PageFaq;
      'page.image': PageImage;
      'page.qa': PageQa;
      'page.text': PageText;
      'shared.images': SharedImages;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.test-component': SharedTestComponent;
      'shared.work-sample': SharedWorkSample;
    }
  }
}
