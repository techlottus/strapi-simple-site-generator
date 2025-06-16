import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiBlogEntryPageBlogEntryPage extends Schema.SingleType {
  collectionName: 'blog_entry_pages';
  info: {
    description: '';
    displayName: 'Blog Entry Page';
    pluralName: 'blog-entry-pages';
    singularName: 'blog-entry-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-entry-page.blog-entry-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    layout: Attribute.Relation<
      'api::blog-entry-page.blog-entry-page',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    sections: Attribute.DynamicZone<['sections.banner']>;
    slug: Attribute.Text & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-entry-page.blog-entry-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogPageBlogPage extends Schema.SingleType {
  collectionName: 'blog_pages';
  info: {
    description: '';
    displayName: 'Blog Page';
    pluralName: 'blog-pages';
    singularName: 'blog-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    layout: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    sections: Attribute.DynamicZone<
      [
        'sections.banner',
        'sections.blog-post-list',
        'sections.overlay-card-list',
        'sections.entryconfig',
        'sections.faq-section',
        'sections.form-video',
        'sections.hero-slider',
        'sections.hero',
        'sections.listconfig',
        'sections.offer',
        'sections.statistics-card-list',
        'sections.statistics-card',
        'sections.text-image'
      ]
    >;
    seo: Attribute.Component<'shared.seo'> & Attribute.Required;
    slug: Attribute.Text & Attribute.Required & Attribute.Unique;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogPostBlogPost extends Schema.CollectionType {
  collectionName: 'blog_posts';
  info: {
    description: '';
    displayName: 'Blog post';
    pluralName: 'blog-posts';
    singularName: 'blog-post';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    abstract: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    body_json: Attribute.JSON &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    categories: Attribute.Relation<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    featured_image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    publication_date: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    related_posts: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    description: '';
    displayName: 'Brand';
    pluralName: 'brands';
    singularName: 'brand';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about_json: Attribute.JSON;
    contact: Attribute.String;
    contactEmail: Attribute.Email;
    contactPhone: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    website: Attribute.String;
  };
}

export interface ApiCampusCampus extends Schema.CollectionType {
  collectionName: 'campuses';
  info: {
    description: '';
    displayName: 'Campus';
    pluralName: 'campuses';
    singularName: 'campus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.String;
    coordsX: Attribute.Float;
    coordsY: Attribute.Float;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::campus.campus',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email;
    image: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    phone: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
        minLength: 7;
      }>;
    publishedAt: Attribute.DateTime;
    state: Attribute.Enumeration<['Coahuila', 'Nuevo Le\u00F3n', 'Tamaulipas']>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::campus.campus',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'blog category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    blog_posts: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::blog-post.blog-post'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCertificationCertification extends Schema.CollectionType {
  collectionName: 'certifications';
  info: {
    displayName: 'Certification';
    pluralName: 'certifications';
    singularName: 'certification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::certification.certification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    imgCertification: Attribute.Media<'images'>;
    name: Attribute.String;
    programs: Attribute.Relation<
      'api::certification.certification',
      'manyToMany',
      'api::program.program'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::certification.certification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreateEventsExcelCreateEventsExcel
  extends Schema.CollectionType {
  collectionName: 'create_events_excels';
  info: {
    displayName: 'Create Events excel';
    pluralName: 'create-events-excels';
    singularName: 'create-events-excel';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::create-events-excel.create-events-excel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    excel_file: Attribute.Media<'files'> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::create-events-excel.create-events-excel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEducationalOfferingEducationalOffering
  extends Schema.SingleType {
  collectionName: 'educational_offerings';
  info: {
    description: '';
    displayName: 'Educational Offering';
    pluralName: 'educational-offerings';
    singularName: 'educational-offering';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::educational-offering.educational-offering',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    levelsConfig: Attribute.Component<'programs.level-page-config', true>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::educational-offering.educational-offering',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventCategoryEventCategory extends Schema.CollectionType {
  collectionName: 'event_categories';
  info: {
    displayName: 'event_category';
    pluralName: 'event-categories';
    singularName: 'event-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-category.event-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    events: Attribute.Relation<
      'api::event-category.event-category',
      'oneToMany',
      'api::event.event'
    >;
    name: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event-category.event-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventListEventList extends Schema.SingleType {
  collectionName: 'event_lists';
  info: {
    description: '';
    displayName: 'Event List';
    pluralName: 'event-lists';
    singularName: 'event-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Component<'sections.banner'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-list.event-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    layout: Attribute.Relation<
      'api::event-list.event-list',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::event-list.event-list', 'title'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event-list.event-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    description: '';
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    agenda: Attribute.Component<'events.event-agenda'>;
    attendant_list: Attribute.String;
    attendant_list_id: Attribute.Integer;
    breadcrumb: Attribute.String;
    campus: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'api::campus.campus'
    >;
    category: Attribute.Relation<
      'api::event.event',
      'manyToOne',
      'api::event-category.event-category'
    >;
    contact_link: Attribute.Component<'sections.link'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    desktop_image: Attribute.Media<'images'>;
    details_json: Attribute.JSON;
    end_date: Attribute.Date & Attribute.Required;
    end_register_date: Attribute.Date & Attribute.Required;
    end_register_time: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'18:00'>;
    end_time: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'19:00'>;
    expositors: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::expositor.expositor'
    >;
    is_private: Attribute.Boolean;
    location: Attribute.Component<'events.event-location'>;
    metadata: Attribute.JSON;
    mobile_image: Attribute.Media<'images'>;
    modality: Attribute.Enumeration<['online', 'presencial']>;
    name: Attribute.String;
    price_list: Attribute.Component<'sections.prices'>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    short_description: Attribute.String;
    slug: Attribute.UID<'api::event.event', 'name'>;
    sponsors: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::brand.brand'
    >;
    start_date: Attribute.Date & Attribute.Required;
    start_register_date: Attribute.Date & Attribute.Required;
    start_register_time: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'08:00'>;
    start_time: Attribute.Time &
      Attribute.Required &
      Attribute.DefaultTo<'16:30'>;
    status: Attribute.Enumeration<['draft', 'active', 'canceled', 'finished']>;
    tablet_image: Attribute.Media<'images'>;
    total_duration: Attribute.Integer;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    video: Attribute.Component<'events.youtube-video'>;
  };
}

export interface ApiExpositorExpositor extends Schema.CollectionType {
  collectionName: 'expositors';
  info: {
    description: '';
    displayName: 'expositor';
    pluralName: 'expositors';
    singularName: 'expositor';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bio_json: Attribute.JSON;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::expositor.expositor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    events: Attribute.Relation<
      'api::expositor.expositor',
      'manyToMany',
      'api::event.event'
    >;
    image: Attribute.Media<'images'>;
    job_title: Attribute.String;
    name: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::expositor.expositor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExternalPostExternalPost extends Schema.CollectionType {
  collectionName: 'external_posts';
  info: {
    description: '';
    displayName: 'External Post';
    pluralName: 'external-posts';
    singularName: 'external-post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    abstract_json: Attribute.JSON;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::external-post.external-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    externalPostCategories: Attribute.Relation<
      'api::external-post.external-post',
      'manyToMany',
      'api::extpost-category.extpost-category'
    >;
    featuredImage: Attribute.Media<'images'>;
    publicationDate: Attribute.Date;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::external-post.external-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtpostCategoryExtpostCategory
  extends Schema.CollectionType {
  collectionName: 'extpost_categories';
  info: {
    displayName: 'ExternalPost Category';
    pluralName: 'extpost-categories';
    singularName: 'extpost-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extpost-category.extpost-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    external_posts: Attribute.Relation<
      'api::extpost-category.extpost-category',
      'manyToMany',
      'api::external-post.external-post'
    >;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::extpost-category.extpost-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqCategoryFaqCategory extends Schema.CollectionType {
  collectionName: 'faq_categories';
  info: {
    displayName: 'FAQ Category';
    pluralName: 'faq-categories';
    singularName: 'faq-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-category.faq-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faqs: Attribute.Relation<
      'api::faq-category.faq-category',
      'oneToMany',
      'api::faq.faq'
    >;
    publishedAt: Attribute.DateTime;
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::faq-category.faq-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'faq';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answer_json: Attribute.JSON;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    faqCategory: Attribute.Relation<
      'api::faq.faq',
      'manyToOne',
      'api::faq-category.faq-category'
    >;
    publishedAt: Attribute.DateTime;
    question: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.CollectionType {
  collectionName: 'footers';
  info: {
    description: '';
    displayName: 'footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    footerSection: Attribute.Component<'organisms.footer-section', true>;
    layouts: Attribute.Relation<
      'api::footer.footer',
      'oneToMany',
      'api::layout.layout'
    >;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGeneralConfigGeneralConfig extends Schema.SingleType {
  collectionName: 'general_configs';
  info: {
    description: '';
    displayName: 'General Config';
    pluralName: 'general-configs';
    singularName: 'general-config';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::general-config.general-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    robots: Attribute.Component<'atoms.text', true>;
    scriptsPixels: Attribute.Component<'sections.script-pixel', true>;
    sendWhatsapp: Attribute.Component<'misc.send-whatsapp'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::general-config.general-config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.CollectionType {
  collectionName: 'headers';
  info: {
    description: '';
    displayName: 'header';
    pluralName: 'headers';
    singularName: 'header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alert: Attribute.Component<'molecules.info-alert'>;
    banners: Attribute.Component<'sections.banner', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    button: Attribute.Component<'molecules.button'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    href: Attribute.String;
    layouts: Attribute.Relation<
      'api::header.header',
      'oneToMany',
      'api::layout.layout'
    >;
    links: Attribute.Component<'sections.link', true>;
    linkText: Attribute.String;
    menu_items: Attribute.Component<'molecules.menu-item', true>;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    social_medias: Attribute.Relation<
      'api::header.header',
      'oneToMany',
      'api::social-media.social-media'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    description: '';
    displayName: 'Home Page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    layout: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    sections: Attribute.DynamicZone<
      [
        'sections.banner',
        'sections.blog-post-list',
        'sections.carousel',
        'sections.overlay-card-list',
        'sections.entryconfig',
        'sections.faq-section',
        'sections.form-video',
        'sections.hero-slider',
        'sections.hero',
        'sections.listconfig',
        'sections.offer',
        'sections.statistics-card-list',
        'sections.statistics-card',
        'sections.text-image',
        'sections.image-card-list',
        'sections.promo-link-list',
        'sections.text-content',
        'sections.events-card-container'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.Text & Attribute.Unique;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKnowledgeAreaKnowledgeArea extends Schema.CollectionType {
  collectionName: 'knowledge_areas';
  info: {
    description: '';
    displayName: 'Knowledge Area';
    pluralName: 'knowledge-areas';
    singularName: 'knowledge-area';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::knowledge-area.knowledge-area',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    programs: Attribute.Relation<
      'api::knowledge-area.knowledge-area',
      'manyToMany',
      'api::program.program'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::knowledge-area.knowledge-area',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLayoutLayout extends Schema.CollectionType {
  collectionName: 'layouts';
  info: {
    description: '';
    displayName: 'layout';
    pluralName: 'layouts';
    singularName: 'layout';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    footer: Attribute.Relation<
      'api::layout.layout',
      'manyToOne',
      'api::footer.footer'
    >;
    header: Attribute.Relation<
      'api::layout.layout',
      'manyToOne',
      'api::header.header'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'Default'>;
    pages: Attribute.Relation<
      'api::layout.layout',
      'oneToMany',
      'api::page.page'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::layout.layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLevelLevel extends Schema.CollectionType {
  collectionName: 'levels';
  info: {
    description: '';
    displayName: 'Level';
    pluralName: 'levels';
    singularName: 'level';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::level.level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    modalities: Attribute.Relation<
      'api::level.level',
      'oneToMany',
      'api::modality.modality'
    >;
    programs: Attribute.Relation<
      'api::level.level',
      'oneToMany',
      'api::program.program'
    >;
    publishedAt: Attribute.DateTime;
    requirements_json: Attribute.JSON;
    requirementsDesktopImage: Attribute.Media<'images'>;
    requirementsMobileImage: Attribute.Media<'images'>;
    requirementsTabletImage: Attribute.Media<'images'>;
    SFlevels: Attribute.Component<'atoms.level-text', true>;
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::level.level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModalityCategoryModalityCategory
  extends Schema.CollectionType {
  collectionName: 'modality_categories';
  info: {
    description: '';
    displayName: 'Modality Category';
    pluralName: 'modality-categories';
    singularName: 'modality-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modality-category.modality-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    label: Attribute.String;
    modalities: Attribute.Relation<
      'api::modality-category.modality-category',
      'oneToMany',
      'api::modality.modality'
    >;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::modality-category.modality-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModalityModality extends Schema.CollectionType {
  collectionName: 'modalities';
  info: {
    description: '';
    displayName: 'Modality';
    pluralName: 'modalities';
    singularName: 'modality';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Characteristics: Attribute.Component<'sections.modality-characteristics'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modality.modality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    desktopImage: Attribute.Media<'images'>;
    label: Attribute.String;
    mobileImage: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    programRvoes: Attribute.Relation<
      'api::modality.modality',
      'oneToMany',
      'api::program-rvoe.program-rvoe'
    >;
    publishedAt: Attribute.DateTime;
    tabletImage: Attribute.Media<'images'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::modality.modality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotFoundPageNotFoundPage extends Schema.SingleType {
  collectionName: 'not_found_pages';
  info: {
    description: '';
    displayName: 'Not Found Page';
    pluralName: 'not-found-pages';
    singularName: 'not-found-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::not-found-page.not-found-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    layout: Attribute.Relation<
      'api::not-found-page.not-found-page',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    sections: Attribute.DynamicZone<['sections.web-error']>;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.String & Attribute.DefaultTo<'not-found'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::not-found-page.not-found-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOpeningOpening extends Schema.CollectionType {
  collectionName: 'openings';
  info: {
    description: '';
    displayName: 'Opening';
    pluralName: 'openings';
    singularName: 'opening';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::opening.opening',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    opening_schedule: Attribute.Component<'programs.schedule'>;
    program: Attribute.Relation<
      'api::opening.opening',
      'manyToOne',
      'api::program.program'
    >;
    publishedAt: Attribute.DateTime;
    start_date: Attribute.Date;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::opening.opening',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    description: '';
    displayName: 'page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    breadcrumb: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    layout: Attribute.Relation<
      'api::page.page',
      'manyToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    sections: Attribute.DynamicZone<
      [
        'sections.container-text-form',
        'sections.accordion',
        'sections.alert',
        'sections.atr-program-info',
        'sections.atr-program-perks',
        'sections.banner',
        'sections.leaderboard',
        'sections.banner-numeralia',
        'sections.blog-posts-podcast',
        'sections.cards-statistics',
        'sections.carousel',
        'sections.color-card-list',
        'sections.card-list',
        'sections.contact-target-list',
        'sections.container-outstanding-list',
        'sections.cont-ed-programs',
        'sections.faq-section',
        'sections.form-container',
        'sections.form-video',
        'sections.listconfig',
        'sections.link-list',
        'sections.programs-filter',
        'sections.promo-link-list',
        'sections.podcast-list',
        'sections.icon-text-list-image',
        'sections.introduction-image',
        'sections.mosaic',
        'sections.statistics-card-list',
        'sections.overlay-card-list',
        'sections.repeatable-banner',
        'sections.rich-text-image',
        'sections.rich-text-image-bg-image',
        'sections.rich-text-video',
        'sections.hero-slider',
        'sections.text-content',
        'sections.google-map',
        'sections.knowledge-area-filter',
        'sections.modality-filter',
        'sections.program-accordion-list',
        'sections.rockstar-info-list',
        'sections.videos',
        'sections.cards-detail-content',
        'sections.cards-video-content',
        'sections.rvoe-accordion-list',
        'sections.category-accordion-list',
        'sections.external-post-by-category-list',
        'sections.testimonial-slider',
        'sections.graduates-form',
        'organisms.tab-list',
        'sections.video-image',
        'sections.banner-cards',
        'sections.faq-image'
      ]
    > &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.String;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPastEventsListPastEventsList extends Schema.SingleType {
  collectionName: 'past_events_lists';
  info: {
    description: '';
    displayName: 'Past Events List';
    pluralName: 'past-events-lists';
    singularName: 'past-events-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Attribute.Component<'sections.banner'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::past-events-list.past-events-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.JSON;
    layout: Attribute.Relation<
      'api::past-events-list.past-events-list',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::past-events-list.past-events-list', 'title'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::past-events-list.past-events-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPodcastPodcast extends Schema.CollectionType {
  collectionName: 'podcasts';
  info: {
    description: '';
    displayName: 'Podcast';
    pluralName: 'podcasts';
    singularName: 'podcast';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::podcast.podcast',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    providerId: Attribute.String;
    publicationDate: Attribute.Date;
    publishedAt: Attribute.DateTime;
    type: Attribute.Enumeration<
      ['playlist', 'episode', 'album', 'artist', 'track']
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::podcast.podcast',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramCategoryProgramCategory
  extends Schema.CollectionType {
  collectionName: 'program_categories';
  info: {
    displayName: 'Program Category';
    pluralName: 'program-categories';
    singularName: 'program-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-category.program-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    programs: Attribute.Relation<
      'api::program-category.program-category',
      'oneToMany',
      'api::program.program'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::program-category.program-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramDetailBachilleratoProgramDetailBachillerato
  extends Schema.SingleType {
  collectionName: 'program_detail_bachilleratoes';
  info: {
    description: '';
    displayName: 'Program Detail - Bachillerato';
    pluralName: 'program-detail-bachilleratoes';
    singularName: 'program-detail-bachillerato';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    admissionProfileImage: Attribute.Media<'images'>;
    banner: Attribute.Component<'sections.banner'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-detail-bachillerato.program-detail-bachillerato',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    feedback: Attribute.Component<'sections.alert'>;
    graduateProfileImage: Attribute.Media<'images'>;
    layout: Attribute.Relation<
      'api::program-detail-bachillerato.program-detail-bachillerato',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::program-detail-bachillerato.program-detail-bachillerato',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    videoId: Attribute.String;
  };
}

export interface ApiProgramDetailSuperiorProgramDetailSuperior
  extends Schema.SingleType {
  collectionName: 'program_detail_superiors';
  info: {
    description: '';
    displayName: 'Program Detail - Superior';
    pluralName: 'program-detail-superiors';
    singularName: 'program-detail-superior';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    admissionProfileBackgroundColor: Attribute.String;
    admissionProfileImage: Attribute.Media<'images'>;
    admissionRequirementsBackgroundColor: Attribute.String;
    admissionRequirementsImage: Attribute.Media<'images'>;
    banner: Attribute.Component<'sections.banner'>;
    contentVariant: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'dark'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-detail-superior.program-detail-superior',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    graduateProfileBackgroundColor: Attribute.String;
    graduateProfileImage: Attribute.Media<'images'>;
    laborFieldBackgroundColor: Attribute.String;
    laborFieldImage: Attribute.Media<'images'>;
    layout: Attribute.Relation<
      'api::program-detail-superior.program-detail-superior',
      'oneToOne',
      'api::layout.layout'
    >;
    publishedAt: Attribute.DateTime;
    richTextImage: Attribute.Component<'sections.rich-text-image'>;
    richTextImageCertifications: Attribute.Component<'sections.rich-text-image'>;
    rvoeDescription_json: Attribute.JSON;
    rvoeImages: Attribute.Component<'molecules.image', true>;
    rvoeTitle: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::program-detail-superior.program-detail-superior',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramPerkProgramPerk extends Schema.CollectionType {
  collectionName: 'program_perks';
  info: {
    description: '';
    displayName: 'Program Perk';
    pluralName: 'program-perks';
    singularName: 'program-perk';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-perk.program-perk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    iconName: Attribute.String;
    publishedAt: Attribute.DateTime;
    subtitle: Attribute.String;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::program-perk.program-perk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramRvoeProgramRvoe extends Schema.CollectionType {
  collectionName: 'program_rvoes';
  info: {
    description: '';
    displayName: 'Program RVOE';
    pluralName: 'program-rvoes';
    singularName: 'program-rvoe';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    campus: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'oneToOne',
      'api::campus.campus'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Date & Attribute.Required;
    knowledgeArea: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'oneToOne',
      'api::knowledge-area.knowledge-area'
    >;
    modality: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'manyToOne',
      'api::modality.modality'
    >;
    name: Attribute.String & Attribute.Required;
    program: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'manyToOne',
      'api::program.program'
    >;
    publishedAt: Attribute.DateTime;
    relatedCampuses: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'oneToMany',
      'api::campus.campus'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::program-rvoe.program-rvoe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProgramProgram extends Schema.CollectionType {
  collectionName: 'programs';
  info: {
    description: '';
    displayName: 'Program';
    pluralName: 'programs';
    singularName: 'program';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    academicTitleName: Attribute.String;
    admissionProfile_json: Attribute.JSON;
    admissionRequirements_json: Attribute.JSON;
    available: Attribute.Boolean & Attribute.DefaultTo<true>;
    brands: Attribute.Relation<
      'api::program.program',
      'oneToMany',
      'api::brand.brand'
    >;
    brochure: Attribute.Media<'files'>;
    campuses: Attribute.Relation<
      'api::program.program',
      'oneToMany',
      'api::campus.campus'
    >;
    certificationMessage: Attribute.Text;
    certifications: Attribute.Relation<
      'api::program.program',
      'manyToMany',
      'api::certification.certification'
    >;
    certificationsDescription_json: Attribute.JSON;
    certificationsTitle: Attribute.String;
    checkoutUrl: Attribute.String;
    checkoutUrlText: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::program.program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    detail_json: Attribute.JSON;
    discount: Attribute.Integer;
    discountPercentageText: Attribute.String &
      Attribute.DefaultTo<'de descuento'>;
    duration: Attribute.Integer;
    durationUnit: Attribute.Enumeration<
      ['horas', 'd\u00EDas', 'semanas', 'meses', 'a\u00F1os']
    > &
      Attribute.DefaultTo<'horas'>;
    evaluationMethods_json: Attribute.JSON;
    goals_json: Attribute.JSON;
    graduateProfile_json: Attribute.JSON;
    HasRvoe: Attribute.Boolean;
    image: Attribute.Media<'images'>;
    knowledgeAreas: Attribute.Relation<
      'api::program.program',
      'manyToMany',
      'api::knowledge-area.knowledge-area'
    >;
    laborField_json: Attribute.JSON;
    learningResources_json: Attribute.JSON;
    level: Attribute.Relation<
      'api::program.program',
      'manyToOne',
      'api::level.level'
    >;
    name: Attribute.String;
    nombreProgramaSalesforce: Attribute.String;
    offerPrice: Attribute.Decimal & Attribute.DefaultTo<0>;
    openings: Attribute.Relation<
      'api::program.program',
      'oneToMany',
      'api::opening.opening'
    >;
    periodicity: Attribute.Enumeration<
      ['mes', 'a\u00F1o', 'bimestre', 'semestre', 'trimestre', 'cuatrimestre']
    > &
      Attribute.DefaultTo<'mes'>;
    price: Attribute.Decimal & Attribute.DefaultTo<0>;
    price_list: Attribute.Component<'sections.prices'>;
    priceDetail_json: Attribute.JSON;
    program_rvoes: Attribute.Relation<
      'api::program.program',
      'oneToMany',
      'api::program-rvoe.program-rvoe'
    >;
    programCategory: Attribute.Relation<
      'api::program.program',
      'manyToOne',
      'api::program-category.program-category'
    >;
    programModalities: Attribute.Component<'programs.modality-feature', true>;
    programPerks: Attribute.Relation<
      'api::program.program',
      'oneToMany',
      'api::program-perk.program-perk'
    >;
    publishedAt: Attribute.DateTime;
    relatedPrograms: Attribute.Relation<
      'api::program.program',
      'oneToMany',
      'api::program.program'
    >;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::program.program', 'name'>;
    summary_json: Attribute.JSON;
    testimonials: Attribute.Component<'sections.testimonial-slider'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::program.program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialMediaSocialMedia extends Schema.CollectionType {
  collectionName: 'social_medias';
  info: {
    description: '';
    displayName: 'SocialMedia';
    pluralName: 'social-medias';
    singularName: 'social-media';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-media.social-media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    href: Attribute.String;
    icon_name: Attribute.String;
    name: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::social-media.social-media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStaticContentStaticContent extends Schema.CollectionType {
  collectionName: 'static_contents';
  info: {
    description: '';
    displayName: 'StaticContent';
    pluralName: 'static-contents';
    singularName: 'static-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::static-content.static-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    format: Attribute.Enumeration<['json', 'ts']> &
      Attribute.Required &
      Attribute.DefaultTo<'json'>;
    path: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::static-content.static-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVacantVacant extends Schema.CollectionType {
  collectionName: 'vacancies';
  info: {
    description: '';
    displayName: 'Vacant';
    pluralName: 'vacancies';
    singularName: 'vacant';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    abstract: Attribute.String;
    body_json: Attribute.JSON;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vacant.vacant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    featured_image: Attribute.Media<'images'>;
    publication_date: Attribute.Date;
    publishedAt: Attribute.DateTime;
    redirect: Attribute.UID<'api::vacant.vacant', 'title'>;
    seo: Attribute.Component<'shared.seo'>;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::vacant.vacant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginRedirectsRedirect extends Schema.CollectionType {
  collectionName: 'redirects';
  info: {
    displayName: 'redirect';
    pluralName: 'redirects';
    singularName: 'redirect';
  };
  options: {
    comment: '';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::redirects.redirect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    from: Attribute.String & Attribute.Required;
    to: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['permanent', 'temporary']> &
      Attribute.Required &
      Attribute.DefaultTo<'permanent'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::redirects.redirect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::blog-entry-page.blog-entry-page': ApiBlogEntryPageBlogEntryPage;
      'api::blog-page.blog-page': ApiBlogPageBlogPage;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::brand.brand': ApiBrandBrand;
      'api::campus.campus': ApiCampusCampus;
      'api::category.category': ApiCategoryCategory;
      'api::certification.certification': ApiCertificationCertification;
      'api::create-events-excel.create-events-excel': ApiCreateEventsExcelCreateEventsExcel;
      'api::educational-offering.educational-offering': ApiEducationalOfferingEducationalOffering;
      'api::event-category.event-category': ApiEventCategoryEventCategory;
      'api::event-list.event-list': ApiEventListEventList;
      'api::event.event': ApiEventEvent;
      'api::expositor.expositor': ApiExpositorExpositor;
      'api::external-post.external-post': ApiExternalPostExternalPost;
      'api::extpost-category.extpost-category': ApiExtpostCategoryExtpostCategory;
      'api::faq-category.faq-category': ApiFaqCategoryFaqCategory;
      'api::faq.faq': ApiFaqFaq;
      'api::footer.footer': ApiFooterFooter;
      'api::general-config.general-config': ApiGeneralConfigGeneralConfig;
      'api::header.header': ApiHeaderHeader;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::knowledge-area.knowledge-area': ApiKnowledgeAreaKnowledgeArea;
      'api::layout.layout': ApiLayoutLayout;
      'api::level.level': ApiLevelLevel;
      'api::modality-category.modality-category': ApiModalityCategoryModalityCategory;
      'api::modality.modality': ApiModalityModality;
      'api::not-found-page.not-found-page': ApiNotFoundPageNotFoundPage;
      'api::opening.opening': ApiOpeningOpening;
      'api::page.page': ApiPagePage;
      'api::past-events-list.past-events-list': ApiPastEventsListPastEventsList;
      'api::podcast.podcast': ApiPodcastPodcast;
      'api::program-category.program-category': ApiProgramCategoryProgramCategory;
      'api::program-detail-bachillerato.program-detail-bachillerato': ApiProgramDetailBachilleratoProgramDetailBachillerato;
      'api::program-detail-superior.program-detail-superior': ApiProgramDetailSuperiorProgramDetailSuperior;
      'api::program-perk.program-perk': ApiProgramPerkProgramPerk;
      'api::program-rvoe.program-rvoe': ApiProgramRvoeProgramRvoe;
      'api::program.program': ApiProgramProgram;
      'api::social-media.social-media': ApiSocialMediaSocialMedia;
      'api::static-content.static-content': ApiStaticContentStaticContent;
      'api::vacant.vacant': ApiVacantVacant;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::redirects.redirect': PluginRedirectsRedirect;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
    }
  }
}
