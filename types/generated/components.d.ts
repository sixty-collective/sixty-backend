import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedWorkSample extends Schema.Component {
  collectionName: 'components_shared_work_samples';
  info: {
    displayName: 'Work Sample';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
    description: Attribute.Text;
    work_sample_disciplines: Attribute.Relation<
      'shared.work-sample',
      'oneToMany',
      'api::work-sample-discipline.work-sample-discipline'
    >;
    embed: Attribute.Boolean & Attribute.DefaultTo<false>;
    embedLink: Attribute.String;
    profile: Attribute.Relation<
      'shared.work-sample',
      'oneToOne',
      'api::profile.profile'
    >;
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

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedImages extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'images';
  };
  attributes: {};
}

export interface PageText extends Schema.Component {
  collectionName: 'components_page_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface PageQa extends Schema.Component {
  collectionName: 'components_page_qas';
  info: {
    displayName: 'qa';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
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

export interface PageFaq extends Schema.Component {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    qa: Attribute.Component<'page.qa', true>;
  };
}

export interface PageEmbed extends Schema.Component {
  collectionName: 'components_page_embeds';
  info: {
    displayName: 'Embed';
    description: '';
  };
  attributes: {
    embed: Attribute.Enumeration<
      ['donorbox', 'testimonialList', 'testimonialSubmission', 'contact']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.work-sample': SharedWorkSample;
      'shared.test-component': SharedTestComponent;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.images': SharedImages;
      'page.text': PageText;
      'page.qa': PageQa;
      'page.image': PageImage;
      'page.faq': PageFaq;
      'page.embed': PageEmbed;
    }
  }
}
