import type { Schema, Attribute } from '@strapi/strapi';

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
    image: Attribute.Media;
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
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
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
    shareImage: Attribute.Media;
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
    files: Attribute.Media;
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
    displayName: 'Work Sample';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    images: Attribute.Media;
    link: Attribute.String;
    description: Attribute.Text;
    disciplines: Attribute.Relation<
      'shared.work-sample',
      'oneToMany',
      'api::discipline.discipline'
    >;
    embed: Attribute.Boolean & Attribute.DefaultTo<false>;
    embedLink: Attribute.String;
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
