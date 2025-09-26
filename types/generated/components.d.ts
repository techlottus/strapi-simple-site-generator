import type { Attribute, Schema } from '@strapi/strapi';

export interface AtomsLevelText extends Schema.Component {
  collectionName: 'components_atoms_level_texts';
  info: {
    displayName: 'level-text';
  };
  attributes: {
    level: Attribute.String;
  };
}

export interface AtomsPhone extends Schema.Component {
  collectionName: 'components_atoms_phones';
  info: {
    displayName: 'phone';
  };
  attributes: {
    icon_name: Attribute.String;
    phone: Attribute.BigInteger & Attribute.Required;
  };
}

export interface AtomsTableCell extends Schema.Component {
  collectionName: 'components_atoms_table_cells';
  info: {
    displayName: 'TableCell';
  };
  attributes: {
    align: Attribute.Enumeration<['left', 'center', 'right']>;
    content: Attribute.RichText;
  };
}

export interface AtomsText extends Schema.Component {
  collectionName: 'components_atoms_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    accent: Attribute.String;
  };
}

export interface MiscSendWhatsapp extends Schema.Component {
  collectionName: 'components_misc_send_whatsapps';
  info: {
    displayName: 'send whatsapp';
  };
  attributes: {
    hidden: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    phone: Attribute.BigInteger &
      Attribute.Required &
      Attribute.DefaultTo<'5555555555'>;
  };
}

export interface MoleculesButton extends Schema.Component {
  collectionName: 'components_molecules_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    CTA: Attribute.String & Attribute.Required;
    iconName: Attribute.String;
    label: Attribute.String;
    size: Attribute.Enumeration<['xs', 'sm', 'md', 'lg']>;
    variant: Attribute.Enumeration<
      ['primary', 'outlined', 'outlined-negative']
    > &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface MoleculesFooterColumn extends Schema.Component {
  collectionName: 'components_molecules_footer_columns';
  info: {
    description: '';
    displayName: 'footerColumn';
  };
  attributes: {
    groups: Attribute.Component<'molecules.footer-group-items', true>;
  };
}

export interface MoleculesFooterGroupItems extends Schema.Component {
  collectionName: 'components_molecules_footer_group_items';
  info: {
    description: '';
    displayName: 'footerGroupItems';
  };
  attributes: {
    href: Attribute.String;
    items: Attribute.Component<'molecules.submenu-item-3', true>;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
    title: Attribute.String;
  };
}

export interface MoleculesImage extends Schema.Component {
  collectionName: 'components_molecules_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface MoleculesInfoAlert extends Schema.Component {
  collectionName: 'components_molecules_info_alerts';
  info: {
    displayName: 'info-alert';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'sections.link'>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface MoleculesInformativeIcon extends Schema.Component {
  collectionName: 'components_molecules_informative_icons';
  info: {
    description: '';
    displayName: 'informativeIcon';
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    iconName: Attribute.String;
    title: Attribute.String;
  };
}

export interface MoleculesMenuItem extends Schema.Component {
  collectionName: 'components_molecules_menu_items';
  info: {
    description: '';
    displayName: 'menu_item';
  };
  attributes: {
    href: Attribute.String;
    items: Attribute.Component<'molecules.submenu-item', true>;
    label: Attribute.String & Attribute.Required;
    linkText: Attribute.String;
  };
}

export interface MoleculesMenuLayout extends Schema.Component {
  collectionName: 'components_molecules_menu_layouts';
  info: {
    displayName: 'menu_layout';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface MoleculesSubmenuItem extends Schema.Component {
  collectionName: 'components_molecules_submenu_items';
  info: {
    displayName: 'submenu_item';
  };
  attributes: {
    bold: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    items: Attribute.Component<'molecules.submenu-item-2', true>;
    label: Attribute.String;
    linkText: Attribute.String;
  };
}

export interface MoleculesSubmenuItem2 extends Schema.Component {
  collectionName: 'components_molecules_submenu_item_2s';
  info: {
    description: '';
    displayName: 'submenu_item_2';
  };
  attributes: {
    bold: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    items: Attribute.Component<'molecules.submenu-item-3', true>;
    label: Attribute.String;
    linkText: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface MoleculesSubmenuItem3 extends Schema.Component {
  collectionName: 'components_molecules_submenu_item_3s';
  info: {
    description: '';
    displayName: 'submenu_item_3';
  };
  attributes: {
    bold: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
  };
}

export interface MoleculesTableRow extends Schema.Component {
  collectionName: 'components_molecules_table_rows';
  info: {
    displayName: 'TableRow';
    icon: 'filter';
  };
  attributes: {
    tableCell: Attribute.Component<'atoms.table-cell', true>;
  };
}

export interface OrganismsFooterSection extends Schema.Component {
  collectionName: 'components_organisms_footer_sections';
  info: {
    description: '';
    displayName: 'footerSection';
  };
  attributes: {
    columns: Attribute.Component<'molecules.footer-column', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    images: Attribute.Media<'images', true>;
    links: Attribute.Component<'sections.link', true>;
    logo: Attribute.Boolean & Attribute.DefaultTo<false>;
    phone: Attribute.Component<'atoms.phone'>;
    position: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
    social_medias: Attribute.Relation<
      'organisms.footer-section',
      'oneToMany',
      'api::social-media.social-media'
    >;
    title: Attribute.String;
  };
}

export interface OrganismsTab extends Schema.Component {
  collectionName: 'components_organisms_tabs';
  info: {
    description: '';
    displayName: 'tab';
    icon: 'stack';
  };
  attributes: {
    bannerIconCard: Attribute.Component<'sections.banner-cards'>;
    content: Attribute.Enumeration<
      ['richtextImage', 'richtextVideo', 'bannerIconCard']
    > &
      Attribute.DefaultTo<'richtextImage'>;
    richtextImage: Attribute.Component<'sections.rich-text-image', true>;
    richtextVideo: Attribute.Component<'sections.rich-text-video', true>;
    title: Attribute.String;
  };
}

export interface OrganismsTabList extends Schema.Component {
  collectionName: 'components_organisms_tabs_lists';
  info: {
    description: '';
    displayName: 'Container-TabList';
  };
  attributes: {
    accent_title: Attribute.String;
    subtitle: Attribute.String;
    tabs: Attribute.Component<'organisms.tab', true>;
    textAlign: Attribute.Enumeration<['center', 'left']> &
      Attribute.DefaultTo<'center'>;
    title: Attribute.String;
  };
}

export interface SectionsAccordion extends Schema.Component {
  collectionName: 'components_sections_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    accordionItems: Attribute.Component<'sections.accordion-item', true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsAccordionItem extends Schema.Component {
  collectionName: 'components_sections_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
  };
  attributes: {
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsAlert extends Schema.Component {
  collectionName: 'components_sections_alerts';
  info: {
    description: '';
    displayName: 'Alert';
  };
  attributes: {
    iconName: Attribute.String;
    links: Attribute.Component<'sections.link', true>;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: 'components_sections_banners';
  info: {
    description: '';
    displayName: 'Banner-hero';
    icon: 'audio-description';
  };
  attributes: {
    contentVariant: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'light'>;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    desktopImage: Attribute.Media<'images'> & Attribute.Required;
    desktopRatio: Attribute.String & Attribute.DefaultTo<'7/2'>;
    mobileImage: Attribute.Media<'images'>;
    mobileRatio: Attribute.String & Attribute.DefaultTo<'4/3'>;
    overlay: Attribute.Enumeration<['none', 'white', 'black']>;
    subtitle: Attribute.String;
    tabletImage: Attribute.Media<'images'>;
    tabletRatio: Attribute.String & Attribute.DefaultTo<'7/2'>;
    textPosition: Attribute.Enumeration<
      [
        'center',
        'center top',
        'center bottom',
        'left top',
        'left center',
        'left bottom',
        'right top',
        'right center',
        'right bottom'
      ]
    > &
      Attribute.DefaultTo<'left top'>;
    title: Attribute.String;
  };
}

export interface SectionsBannerCards extends Schema.Component {
  collectionName: 'components_sections_banner_cards';
  info: {
    description: '';
    displayName: 'BannerIconCard';
    icon: 'apps';
  };
  attributes: {
    button: Attribute.Component<'molecules.button'>;
    cardIconItem: Attribute.Component<'sections.card-icon', true>;
    desktopImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tabletImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsBannerNumeralia extends Schema.Component {
  collectionName: 'components_sections_banner_numeralias';
  info: {
    description: '';
    displayName: 'BannerNumeralia';
  };
  attributes: {
    desktopImage: Attribute.Media<'images'> & Attribute.Required;
    mobileImage: Attribute.Media<'images'>;
    overlay: Attribute.Enumeration<['none', 'white', 'dark']> &
      Attribute.DefaultTo<'dark'>;
    statistics: Attribute.Component<'sections.statistics-card', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    subtitle: Attribute.Text;
    tabletImage: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface SectionsCard extends Schema.Component {
  collectionName: 'components_sections_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    image: Attribute.Media<'images'>;
    imageAspectRatio: Attribute.String & Attribute.DefaultTo<'2/1'>;
    linkText: Attribute.String;
    linkUrl: Attribute.Text;
    subtitle: Attribute.String;
    title: Attribute.String;
    type: Attribute.Enumeration<['vertical', 'horizontal']> &
      Attribute.DefaultTo<'vertical'>;
  };
}

export interface SectionsCardIcon extends Schema.Component {
  collectionName: 'components_sections_card_icons';
  info: {
    description: '';
    displayName: 'CardIcon';
    icon: 'picture';
  };
  attributes: {
    iconColor: Attribute.String;
    IconName: Attribute.String;
    RichText: Attribute.Blocks;
    RichText_json: Attribute.JSON;
  };
}

export interface SectionsCardList extends Schema.Component {
  collectionName: 'components_sections_card_lists';
  info: {
    description: '';
    displayName: 'Container-cardList';
  };
  attributes: {
    cards: Attribute.Component<'sections.card', true>;
    title: Attribute.String;
  };
}

export interface SectionsCardsDetailContent extends Schema.Component {
  collectionName: 'components_sections_cards_detail_contents';
  info: {
    description: '';
    displayName: 'CardsDetailContent';
  };
  attributes: {
    cards: Attribute.Component<'sections.card', true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    links: Attribute.Component<'sections.link', true>;
    textPosition: Attribute.Enumeration<['right', 'left']> &
      Attribute.DefaultTo<'left'>;
    title: Attribute.String;
  };
}

export interface SectionsCardsStatistics extends Schema.Component {
  collectionName: 'components_sections_cards_statistics';
  info: {
    description: '';
    displayName: 'CardsStatistics';
  };
  attributes: {
    cards: Attribute.Component<'sections.card', true>;
    cardsPosition: Attribute.Enumeration<['right', 'left']> &
      Attribute.DefaultTo<'left'>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    descriptionCards: Attribute.Blocks;
    descriptionCards_json: Attribute.JSON;
    descriptionStatistics: Attribute.Blocks;
    descriptionStatistics_json: Attribute.JSON;
    statistics: Attribute.Component<'sections.statistics-card', true>;
    title: Attribute.String;
    titleCards: Attribute.String;
    titleStatistics: Attribute.String;
  };
}

export interface SectionsCardsVideoContent extends Schema.Component {
  collectionName: 'components_sections_cards_video_contents';
  info: {
    description: '';
    displayName: 'CardsVideoContent';
  };
  attributes: {
    button: Attribute.Component<'molecules.button'>;
    cards: Attribute.Component<'sections.card', true>;
    subtitle: Attribute.Blocks;
    subtitle_json: Attribute.JSON;
    textPosition: Attribute.Enumeration<['right', 'left']>;
    title: Attribute.String;
    videoItem: Attribute.Component<'sections.video-item'>;
  };
}

export interface SectionsCarousel extends Schema.Component {
  collectionName: 'components_sections_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
  };
  attributes: {
    backgroundColor: Attribute.String;
    button: Attribute.Component<'molecules.button'>;
    cards: Attribute.Component<'sections.card', true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    images: Attribute.Component<'sections.mediaquery-images', true>;
    origin: Attribute.Enumeration<['center', 'auto']> &
      Attribute.DefaultTo<'center'>;
    title: Attribute.String;
    type: Attribute.Enumeration<['card', 'image']> &
      Attribute.Required &
      Attribute.DefaultTo<'card'>;
  };
}

export interface SectionsColorCard extends Schema.Component {
  collectionName: 'components_sections_color_cards';
  info: {
    description: '';
    displayName: 'colorCard';
  };
  attributes: {
    classNames: Attribute.String;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    headline: Attribute.String;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsColorCardList extends Schema.Component {
  collectionName: 'components_sections_color_card_lists';
  info: {
    description: '';
    displayName: 'ColorCardList';
  };
  attributes: {
    alternativeText: Attribute.Blocks;
    alternativeText_json: Attribute.JSON;
    cards: Attribute.Component<'sections.color-card', true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsContactTargetCard extends Schema.Component {
  collectionName: 'components_sections_contact_target_cards';
  info: {
    description: '';
    displayName: 'ContactTargetCard';
  };
  attributes: {
    email: Attribute.Email;
    image: Attribute.Media<'images'>;
    link: Attribute.String;
    phone: Attribute.String;
    textLink: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsContactTargetList extends Schema.Component {
  collectionName: 'components_sections_contact_target_lists';
  info: {
    description: '';
    displayName: 'Container-contactTargetList';
  };
  attributes: {
    cards: Attribute.Component<'sections.contact-target-card', true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsContainerOutstandingList extends Schema.Component {
  collectionName: 'components_sections_container_outstanding_lists';
  info: {
    displayName: 'container-outstandingList';
  };
  attributes: {
    outstandings: Attribute.Component<'sections.outstanding', true>;
    title: Attribute.String;
  };
}

export interface SectionsEventsCardContainer extends Schema.Component {
  collectionName: 'components_sections_events_card_containers';
  info: {
    description: '';
    displayName: 'events card container';
  };
  attributes: {
    max_entries: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<5>;
    title: Attribute.String;
  };
}

export interface SectionsGoogleMap extends Schema.Component {
  collectionName: 'components_sections_google_maps';
  info: {
    description: '';
    displayName: 'GoogleMap';
  };
  attributes: {
    address: Attribute.Text;
    admissionPhone: Attribute.String;
    detailPosition: Attribute.Enumeration<['left', 'right', 'top']>;
    name: Attribute.String;
    receptionPhone: Attribute.String;
    schedule: Attribute.String;
    src: Attribute.Text & Attribute.Required;
    title: Attribute.String;
    type: Attribute.Enumeration<['tour', 'map']> & Attribute.DefaultTo<'map'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'ad';
  };
  attributes: {
    contentVariant: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    desktopImage: Attribute.Media<'images'> & Attribute.Required;
    mobileImage: Attribute.Media<'images'>;
    overlay: Attribute.Enumeration<['none', 'white', 'black']>;
    subtitle: Attribute.String;
    tabletImage: Attribute.Media<'images'>;
    textPosition: Attribute.Enumeration<
      [
        'center',
        'center top',
        'center bottom',
        'left top',
        'left center',
        'left bottom',
        'right top',
        'right center',
        'right bottom'
      ]
    > &
      Attribute.Required;
    title: Attribute.String;
  };
}

export interface SectionsHeroSlider extends Schema.Component {
  collectionName: 'components_sections_hero_sliders';
  info: {
    description: '';
    displayName: 'Slider-hero';
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    slide: Attribute.Component<'sections.hero', true>;
    title: Attribute.String;
  };
}

export interface SectionsIconTextItem extends Schema.Component {
  collectionName: 'components_sections_icon_text_items';
  info: {
    description: '';
    displayName: 'IconTextItem';
  };
  attributes: {
    iconName: Attribute.String;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsIconTextListImage extends Schema.Component {
  collectionName: 'components_sections_icon_text_list_images';
  info: {
    description: '';
    displayName: 'IconTextListImage';
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    desktopImage: Attribute.Media<'images'>;
    iconTextList: Attribute.Component<'sections.icon-text-item', true>;
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'right'>;
    mobileImage: Attribute.Media<'images'>;
    tabletImage: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface SectionsImageCard extends Schema.Component {
  collectionName: 'components_sections_image_cards';
  info: {
    description: '';
    displayName: 'imageCard';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    linkIconFirst: Attribute.String;
    linkIconSecond: Attribute.String;
    linkText: Attribute.String;
    linkUrl: Attribute.Text;
    subtitle: Attribute.Text;
    title: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsImageCardList extends Schema.Component {
  collectionName: 'components_sections_image_card_lists';
  info: {
    description: '';
    displayName: 'imageCardList';
  };
  attributes: {
    imageCards: Attribute.Component<'sections.image-card', true>;
    orientation: Attribute.Enumeration<['vertical', 'horizontal']> &
      Attribute.Required;
    title: Attribute.String;
  };
}

export interface SectionsIntroductionImage extends Schema.Component {
  collectionName: 'components_sections_introduction_images';
  info: {
    description: '';
    displayName: 'IntroductionImage';
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    images: Attribute.Component<'sections.mediaquery-images', true>;
    title: Attribute.String;
  };
}

export interface SectionsLeaderboard extends Schema.Component {
  collectionName: 'components_sections_leaderboards';
  info: {
    description: '';
    displayName: 'Banner-leaderboard';
  };
  attributes: {
    button: Attribute.Component<'molecules.button'>;
    contentVariant: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'light'>;
    desktopImage: Attribute.Media<'images'> & Attribute.Required;
    links: Attribute.Component<'sections.link', true>;
    mobileImage: Attribute.Media<'images'>;
    overlay: Attribute.Enumeration<['none', 'white', 'dark']>;
    subtitleIcon: Attribute.String;
    subtitleText: Attribute.Text;
    tabletImage: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface SectionsLink extends Schema.Component {
  collectionName: 'components_sections_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    disabled: Attribute.Boolean;
    download: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    iconName: Attribute.String;
    iconPosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_blank'>;
    text: Attribute.String;
  };
}

export interface SectionsLinkList extends Schema.Component {
  collectionName: 'components_sections_link_lists';
  info: {
    description: '';
    displayName: 'Container-linkList';
  };
  attributes: {
    links: Attribute.Component<'sections.link', true>;
    title: Attribute.String;
  };
}

export interface SectionsMediaqueryImages extends Schema.Component {
  collectionName: 'components_sections_mediaquery_images';
  info: {
    description: '';
    displayName: 'mediaqueryImages';
  };
  attributes: {
    desktopImage: Attribute.Media<'images'> & Attribute.Required;
    desktopRatio: Attribute.String & Attribute.DefaultTo<'2/1'>;
    mobileImage: Attribute.Media<'images'>;
    mobileRatio: Attribute.String & Attribute.DefaultTo<'4/3'>;
    tabletImage: Attribute.Media<'images'>;
    tabletRatio: Attribute.String & Attribute.DefaultTo<'2/1'>;
  };
}

export interface SectionsMetaSocial extends Schema.Component {
  collectionName: 'components_sections_meta_socials';
  info: {
    displayName: 'MetaSocial';
    icon: 'earth';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SectionsModal extends Schema.Component {
  collectionName: 'components_sections_modals';
  info: {
    displayName: 'Modal';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsMosaic extends Schema.Component {
  collectionName: 'components_sections_mosaics';
  info: {
    description: '';
    displayName: 'Mosaic';
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    images: Attribute.Component<'molecules.image', true>;
    title: Attribute.String;
  };
}

export interface SectionsOutstanding extends Schema.Component {
  collectionName: 'components_sections_outstandings';
  info: {
    description: '';
    displayName: 'OutstandingItem';
  };
  attributes: {
    backgroundColor: Attribute.String & Attribute.Required;
    backgroundWidth: Attribute.Enumeration<['w-full', 'w-3/4']> &
      Attribute.DefaultTo<'w-full'>;
    button: Attribute.Component<'molecules.button'>;
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    contentVariant: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
    image: Attribute.Media<'images'> & Attribute.Required;
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'right'>;
    title: Attribute.String;
  };
}

export interface SectionsOverlayCard extends Schema.Component {
  collectionName: 'components_sections_overlay_cards';
  info: {
    description: '';
    displayName: 'overlayCard';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    overlayColor: Attribute.String;
    title: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsOverlayCardList extends Schema.Component {
  collectionName: 'components_sections_overlay_card_lists';
  info: {
    description: '';
    displayName: 'OverlayCardList';
  };
  attributes: {
    overlayCards: Attribute.Component<'sections.overlay-card', true>;
    title: Attribute.Text;
  };
}

export interface SectionsPixel extends Schema.Component {
  collectionName: 'components_sections_pixels';
  info: {
    displayName: 'Pixel';
  };
  attributes: {
    element: Attribute.Enumeration<['iframe', 'img']>;
    src: Attribute.String & Attribute.Required;
  };
}

export interface SectionsPrivacyPolicy extends Schema.Component {
  collectionName: 'components_sections_privacy_policies';
  info: {
    displayName: 'privacyPolicy';
  };
  attributes: {
    file: Attribute.Media<'files'> & Attribute.Required;
    linkText: Attribute.String;
    text: Attribute.String;
  };
}

export interface SectionsPromoLink extends Schema.Component {
  collectionName: 'components_sections_promo_links';
  info: {
    description: '';
    displayName: 'PromoLinkItem';
  };
  attributes: {
    color: Attribute.String;
    link: Attribute.Text;
    text: Attribute.String & Attribute.Required;
  };
}

export interface SectionsPromoLinkList extends Schema.Component {
  collectionName: 'components_sections_promo_link_lists';
  info: {
    description: '';
    displayName: 'Container-PromoLinkList';
  };
  attributes: {
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    promoLinks: Attribute.Component<'sections.promo-link', true>;
    title: Attribute.Text;
  };
}

export interface SectionsRepeatableBanner extends Schema.Component {
  collectionName: 'components_sections_repeatable_banners';
  info: {
    description: '';
    displayName: 'RepeatableBanner';
  };
  attributes: {
    banners: Attribute.Component<'sections.banner', true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsRichTextImage extends Schema.Component {
  collectionName: 'components_sections_rich_text_images';
  info: {
    description: '';
    displayName: 'RichTextImage';
  };
  attributes: {
    backgroundColor: Attribute.String;
    buttons: Attribute.Component<'molecules.button', true>;
    contentVariant: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'dark'>;
    image: Attribute.Media<'images'>;
    imagePosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'right'>;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsRichTextImageBgImage extends Schema.Component {
  collectionName: 'components_sections_rich_text_image_bg_images';
  info: {
    description: '';
    displayName: 'RichTextImageBgImage';
  };
  attributes: {
    desktopBgImage: Attribute.Media<'images'>;
    mobileBgImage: Attribute.Media<'images'>;
    RichTextImage: Attribute.Component<'sections.rich-text-image'>;
    tabletBgImage: Attribute.Media<'images'>;
  };
}

export interface SectionsRichTextVideo extends Schema.Component {
  collectionName: 'components_sections_rich_text_videos';
  info: {
    description: '';
    displayName: 'RichTextVideo';
  };
  attributes: {
    backgroundColor: Attribute.String;
    buttons: Attribute.Component<'molecules.button', true>;
    contentVariant: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
    provider: Attribute.Enumeration<['Youtube', 'Vimeo']> &
      Attribute.DefaultTo<'Youtube'>;
    providerId: Attribute.String;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
    videoPosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsScriptPixel extends Schema.Component {
  collectionName: 'components_sections_script_pixels';
  info: {
    description: '';
    displayName: 'ScriptPixel';
  };
  attributes: {
    async: Attribute.Boolean & Attribute.DefaultTo<false>;
    crossorigin: Attribute.Boolean & Attribute.DefaultTo<false>;
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    integrity: Attribute.String;
    name: Attribute.String & Attribute.Required;
    pixel: Attribute.Component<'sections.pixel'>;
    script: Attribute.Text;
    src: Attribute.String;
    strategy: Attribute.Enumeration<
      ['afterInteractive', 'beforeInteractive', 'lazyOnload', 'worker']
    > &
      Attribute.DefaultTo<'afterInteractive'>;
    triggerOnRouteChange: Attribute.Enumeration<
      ['gtagPageview', 'fbqPageview']
    >;
  };
}

export interface SectionsSeo extends Schema.Component {
  collectionName: 'components_sections_seos';
  info: {
    displayName: 'seo';
    icon: 'file';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.String;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images'> & Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'sections.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SectionsStatisticsCard extends Schema.Component {
  collectionName: 'components_sections_statistics_cards';
  info: {
    description: '';
    displayName: 'NumbersItem';
    icon: 'address-book';
  };
  attributes: {
    body: Attribute.String;
    color: Attribute.String;
    iconName: Attribute.String;
    maxNumber: Attribute.Integer;
    prefix: Attribute.String;
    suffix: Attribute.String;
    title: Attribute.String;
    variant: Attribute.Enumeration<['default', 'stroke', 'shadow']> &
      Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsStatisticsCardList extends Schema.Component {
  collectionName: 'components_sections_statistics_card_lists';
  info: {
    description: '';
    displayName: 'Numbers';
    icon: 'bars';
  };
  attributes: {
    cards: Attribute.Component<'sections.statistics-card', true> &
      Attribute.Required;
  };
}

export interface SectionsTable extends Schema.Component {
  collectionName: 'components_sections_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    tableBody: Attribute.Component<'molecules.table-row', true>;
    tableHead: Attribute.Component<'molecules.table-row', true>;
    title: Attribute.String;
  };
}

export interface SectionsTestimonialCard extends Schema.Component {
  collectionName: 'components_sections_testimonial_cards';
  info: {
    description: '';
    displayName: 'testimonialCard';
  };
  attributes: {
    subtitle: Attribute.String;
    testimonialImage: Attribute.Media<'images'>;
    testimonialText: Attribute.Blocks;
    testimonialText_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsTestimonialSlider extends Schema.Component {
  collectionName: 'components_sections_testimonial_sliders';
  info: {
    description: '';
    displayName: 'TestimonialSlider';
  };
  attributes: {
    bgImageDesktop: Attribute.Media<'images'>;
    bgImageMobile: Attribute.Media<'images'>;
    bgImageTablet: Attribute.Media<'images'>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    testimonialCards: Attribute.Component<'sections.testimonial-card', true>;
    title: Attribute.String;
  };
}

export interface SectionsTextContent extends Schema.Component {
  collectionName: 'components_sections_text_contents';
  info: {
    description: '';
    displayName: 'TextContent';
  };
  attributes: {
    subtitle: Attribute.String;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsTextImage extends Schema.Component {
  collectionName: 'components_sections_text_images';
  info: {
    description: '';
    displayName: 'TextImage';
  };
  attributes: {
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    image: Attribute.Media<'images'>;
  };
}

export interface SectionsVideoImage extends Schema.Component {
  collectionName: 'components_sections_video_images';
  info: {
    displayName: 'videoImage';
  };
  attributes: {
    Button: Attribute.Component<'molecules.button'>;
    images: Attribute.Component<'molecules.image', true>;
    subtitle: Attribute.String;
    title: Attribute.String;
    Video: Attribute.Component<'sections.video-item'>;
  };
}

export interface SectionsVideoItem extends Schema.Component {
  collectionName: 'components_sections_video_items';
  info: {
    displayName: 'VideoItem';
  };
  attributes: {
    provider: Attribute.Enumeration<['youtube', 'vimeo']> &
      Attribute.DefaultTo<'youtube'>;
    providerId: Attribute.String;
  };
}

export interface SectionsVideos extends Schema.Component {
  collectionName: 'components_sections_videos';
  info: {
    description: '';
    displayName: 'Videos';
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    title: Attribute.String;
    videos: Attribute.Component<'sections.video-item', true>;
  };
}

export interface SectionsWebError extends Schema.Component {
  collectionName: 'components_sections_web_errors';
  info: {
    description: '';
    displayName: 'web error';
  };
  attributes: {
    button: Attribute.Component<'sections.link'>;
    errorCode: Attribute.String;
    message: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.level-text': AtomsLevelText;
      'atoms.phone': AtomsPhone;
      'atoms.table-cell': AtomsTableCell;
      'atoms.text': AtomsText;
      'misc.send-whatsapp': MiscSendWhatsapp;
      'molecules.button': MoleculesButton;
      'molecules.footer-column': MoleculesFooterColumn;
      'molecules.footer-group-items': MoleculesFooterGroupItems;
      'molecules.image': MoleculesImage;
      'molecules.info-alert': MoleculesInfoAlert;
      'molecules.informative-icon': MoleculesInformativeIcon;
      'molecules.menu-item': MoleculesMenuItem;
      'molecules.menu-layout': MoleculesMenuLayout;
      'molecules.submenu-item': MoleculesSubmenuItem;
      'molecules.submenu-item-2': MoleculesSubmenuItem2;
      'molecules.submenu-item-3': MoleculesSubmenuItem3;
      'molecules.table-row': MoleculesTableRow;
      'organisms.footer-section': OrganismsFooterSection;
      'organisms.tab': OrganismsTab;
      'organisms.tab-list': OrganismsTabList;
      'sections.accordion': SectionsAccordion;
      'sections.accordion-item': SectionsAccordionItem;
      'sections.alert': SectionsAlert;
      'sections.banner': SectionsBanner;
      'sections.banner-cards': SectionsBannerCards;
      'sections.banner-numeralia': SectionsBannerNumeralia;
      'sections.card': SectionsCard;
      'sections.card-icon': SectionsCardIcon;
      'sections.card-list': SectionsCardList;
      'sections.cards-detail-content': SectionsCardsDetailContent;
      'sections.cards-statistics': SectionsCardsStatistics;
      'sections.cards-video-content': SectionsCardsVideoContent;
      'sections.carousel': SectionsCarousel;
      'sections.color-card': SectionsColorCard;
      'sections.color-card-list': SectionsColorCardList;
      'sections.contact-target-card': SectionsContactTargetCard;
      'sections.contact-target-list': SectionsContactTargetList;
      'sections.container-outstanding-list': SectionsContainerOutstandingList;
      'sections.events-card-container': SectionsEventsCardContainer;
      'sections.google-map': SectionsGoogleMap;
      'sections.hero': SectionsHero;
      'sections.hero-slider': SectionsHeroSlider;
      'sections.icon-text-item': SectionsIconTextItem;
      'sections.icon-text-list-image': SectionsIconTextListImage;
      'sections.image-card': SectionsImageCard;
      'sections.image-card-list': SectionsImageCardList;
      'sections.introduction-image': SectionsIntroductionImage;
      'sections.leaderboard': SectionsLeaderboard;
      'sections.link': SectionsLink;
      'sections.link-list': SectionsLinkList;
      'sections.mediaquery-images': SectionsMediaqueryImages;
      'sections.meta-social': SectionsMetaSocial;
      'sections.modal': SectionsModal;
      'sections.mosaic': SectionsMosaic;
      'sections.outstanding': SectionsOutstanding;
      'sections.overlay-card': SectionsOverlayCard;
      'sections.overlay-card-list': SectionsOverlayCardList;
      'sections.pixel': SectionsPixel;
      'sections.privacy-policy': SectionsPrivacyPolicy;
      'sections.promo-link': SectionsPromoLink;
      'sections.promo-link-list': SectionsPromoLinkList;
      'sections.repeatable-banner': SectionsRepeatableBanner;
      'sections.rich-text-image': SectionsRichTextImage;
      'sections.rich-text-image-bg-image': SectionsRichTextImageBgImage;
      'sections.rich-text-video': SectionsRichTextVideo;
      'sections.script-pixel': SectionsScriptPixel;
      'sections.seo': SectionsSeo;
      'sections.statistics-card': SectionsStatisticsCard;
      'sections.statistics-card-list': SectionsStatisticsCardList;
      'sections.table': SectionsTable;
      'sections.testimonial-card': SectionsTestimonialCard;
      'sections.testimonial-slider': SectionsTestimonialSlider;
      'sections.text-content': SectionsTextContent;
      'sections.text-image': SectionsTextImage;
      'sections.video-image': SectionsVideoImage;
      'sections.video-item': SectionsVideoItem;
      'sections.videos': SectionsVideos;
      'sections.web-error': SectionsWebError;
    }
  }
}
