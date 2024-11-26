import type { Schema, Struct } from '@strapi/strapi';

export interface PageEmbed extends Struct.ComponentSchema {
  collectionName: 'components_page_embeds';
  info: {
    description: '';
    displayName: 'Embed';
  };
  attributes: {
    embed: Schema.Attribute.Enumeration<
      ['donorbox', 'testimonialList', 'testimonialSubmission', 'contact']
    >;
  };
}

export interface PageFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    qa: Schema.Attribute.Component<'page.qa', true>;
  };
}

export interface PageImage extends Struct.ComponentSchema {
  collectionName: 'components_page_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageQa extends Struct.ComponentSchema {
  collectionName: 'components_page_qas';
  info: {
    displayName: 'qa';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface PageText extends Struct.ComponentSchema {
  collectionName: 'components_page_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'images';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_test_components';
  info: {
    displayName: 'Test Component';
  };
  attributes: {
    Test: Schema.Attribute.String;
  };
}

export interface SharedWorkSample extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_samples';
  info: {
    description: '';
    displayName: 'Work Sample';
  };
  attributes: {
    description: Schema.Attribute.Text;
    embed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    embedLink: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    work_sample_disciplines: Schema.Attribute.Relation<
      'oneToMany',
      'api::work-sample-discipline.work-sample-discipline'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
