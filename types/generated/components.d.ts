import type { Attribute, Schema } from "@strapi/strapi";

export interface AtomsLevelText extends Schema.Component {
  collectionName: "components_atoms_level_texts";
  info: {
    displayName: "level-text";
  };
  attributes: {
    level: Attribute.String;
  };
}

export interface AtomsPhone extends Schema.Component {
  collectionName: "components_atoms_phones";
  info: {
    displayName: "phone";
  };
  attributes: {
    icon_name: Attribute.String;
    phone: Attribute.BigInteger & Attribute.Required;
  };
}

export interface AtomsText extends Schema.Component {
  collectionName: "components_atoms_texts";
  info: {
    displayName: "text";
  };
  attributes: {
    accent: Attribute.String;
  };
}

export interface EventsEventAgenda extends Schema.Component {
  collectionName: "components_events_event_agenda";
  info: {
    description: "";
    displayName: "event_agenda";
  };
  attributes: {
    agenda: Attribute.Media<"files">;
    text_link: Attribute.String;
  };
}

export interface EventsEventLocation extends Schema.Component {
  collectionName: "components_events_event_locations";
  info: {
    description: "";
    displayName: "event_location";
    icon: "alien";
  };
  attributes: {
    conference_link: Attribute.String;
    considerations: Attribute.Blocks;
    considerations_json: Attribute.JSON;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    inner_location: Attribute.String;
    latitude: Attribute.String;
    longitude: Attribute.String;
    max_seats: Attribute.Integer;
    name: Attribute.String;
    text_location: Attribute.String;
  };
}

export interface EventsYoutubeVideo extends Schema.Component {
  collectionName: "components_events_youtube_videos";
  info: {
    displayName: "youtube_video";
  };
  attributes: {
    youtube_id: Attribute.String;
  };
}

export interface MiscSendWhatsapp extends Schema.Component {
  collectionName: "components_misc_send_whatsapps";
  info: {
    displayName: "send whatsapp";
  };
  attributes: {
    hidden: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    phone: Attribute.BigInteger &
      Attribute.Required &
      Attribute.DefaultTo<"5555555555">;
  };
}

export interface MoleculesButton extends Schema.Component {
  collectionName: "components_molecules_buttons";
  info: {
    description: "";
    displayName: "Button";
  };
  attributes: {
    CTA: Attribute.String & Attribute.Required;
    iconName: Attribute.String;
    label: Attribute.String;
    size: Attribute.Enumeration<["xs", "sm", "md", "lg"]>;
    variant: Attribute.Enumeration<
      ["primary", "outlined", "outlined-negative"]
    > &
      Attribute.DefaultTo<"primary">;
  };
}

export interface MoleculesFooterColumn extends Schema.Component {
  collectionName: "components_molecules_footer_columns";
  info: {
    description: "";
    displayName: "footerColumn";
  };
  attributes: {
    groups: Attribute.Component<"molecules.footer-group-items", true>;
  };
}

export interface MoleculesFooterGroupItems extends Schema.Component {
  collectionName: "components_molecules_footer_group_items";
  info: {
    description: "";
    displayName: "footerGroupItems";
  };
  attributes: {
    href: Attribute.String;
    items: Attribute.Component<"molecules.submenu-item-3", true>;
    target: Attribute.Enumeration<["_self", "_blank"]> &
      Attribute.DefaultTo<"_self">;
    title: Attribute.String;
  };
}

export interface MoleculesImage extends Schema.Component {
  collectionName: "components_molecules_images";
  info: {
    displayName: "Image";
  };
  attributes: {
    image: Attribute.Media<"images">;
  };
}

export interface MoleculesInfoAlert extends Schema.Component {
  collectionName: "components_molecules_info_alerts";
  info: {
    displayName: "info-alert";
  };
  attributes: {
    image: Attribute.Media<"images">;
    link: Attribute.Component<"sections.link">;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface MoleculesInformativeIcon extends Schema.Component {
  collectionName: "components_molecules_informative_icons";
  info: {
    description: "";
    displayName: "informativeIcon";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    iconName: Attribute.String;
    title: Attribute.String;
  };
}

export interface MoleculesMenuItem extends Schema.Component {
  collectionName: "components_molecules_menu_items";
  info: {
    description: "";
    displayName: "menu_item";
  };
  attributes: {
    href: Attribute.String;
    items: Attribute.Component<"molecules.submenu-item", true>;
    label: Attribute.String & Attribute.Required;
    linkText: Attribute.String;
  };
}

export interface MoleculesMenuLayout extends Schema.Component {
  collectionName: "components_molecules_menu_layouts";
  info: {
    displayName: "menu_layout";
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface MoleculesPriceCard extends Schema.Component {
  collectionName: "components_molecules_price_cards";
  info: {
    description: "";
    displayName: "price_card";
  };
  attributes: {
    checkout_url: Attribute.String;
    config: Attribute.JSON;
    discount: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    discounted_price: Attribute.Decimal;
    featured_price: Attribute.Boolean & Attribute.DefaultTo<false>;
    metadata: Attribute.JSON;
    partialities_number: Attribute.Integer;
    partiality_price: Attribute.BigInteger;
    payment_provider_image: Attribute.Media<"images">;
    periodicity: Attribute.String;
    perks: Attribute.Component<"atoms.text", true>;
    price: Attribute.Decimal;
    subtitle: Attribute.String;
    title: Attribute.String;
    total_payment: Attribute.Decimal;
  };
}

export interface MoleculesSubmenuItem extends Schema.Component {
  collectionName: "components_molecules_submenu_items";
  info: {
    displayName: "submenu_item";
  };
  attributes: {
    bold: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    items: Attribute.Component<"molecules.submenu-item-2", true>;
    label: Attribute.String;
    linkText: Attribute.String;
  };
}

export interface MoleculesSubmenuItem2 extends Schema.Component {
  collectionName: "components_molecules_submenu_item_2s";
  info: {
    description: "";
    displayName: "submenu_item_2";
  };
  attributes: {
    bold: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    items: Attribute.Component<"molecules.submenu-item-3", true>;
    label: Attribute.String;
    linkText: Attribute.String;
    target: Attribute.Enumeration<["_self", "_blank"]>;
  };
}

export interface MoleculesSubmenuItem3 extends Schema.Component {
  collectionName: "components_molecules_submenu_item_3s";
  info: {
    description: "";
    displayName: "submenu_item_3";
  };
  attributes: {
    bold: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<["_self", "_blank"]> &
      Attribute.DefaultTo<"_self">;
  };
}

export interface OrganismsFooterSection extends Schema.Component {
  collectionName: "components_organisms_footer_sections";
  info: {
    description: "";
    displayName: "footerSection";
  };
  attributes: {
    columns: Attribute.Component<"molecules.footer-column", true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    images: Attribute.Media<"images", true>;
    links: Attribute.Component<"sections.link", true>;
    logo: Attribute.Boolean & Attribute.DefaultTo<false>;
    phone: Attribute.Component<"atoms.phone">;
    position: Attribute.Enumeration<["left", "center", "right"]> &
      Attribute.DefaultTo<"left">;
    social_medias: Attribute.Relation<
      "organisms.footer-section",
      "oneToMany",
      "api::social-media.social-media"
    >;
    title: Attribute.String;
  };
}

export interface OrganismsTab extends Schema.Component {
  collectionName: "components_organisms_tabs";
  info: {
    description: "";
    displayName: "tab";
    icon: "stack";
  };
  attributes: {
    bannerIconCard: Attribute.Component<"sections.banner-cards">;
    content: Attribute.Enumeration<
      ["richtextImage", "richtextVideo", "bannerIconCard"]
    > &
      Attribute.DefaultTo<"richtextImage">;
    richtextImage: Attribute.Component<"sections.rich-text-image", true>;
    richtextVideo: Attribute.Component<"sections.rich-text-video", true>;
    title: Attribute.String;
  };
}

export interface OrganismsTabList extends Schema.Component {
  collectionName: "components_organisms_tabs_lists";
  info: {
    description: "";
    displayName: "Container-TabList";
  };
  attributes: {
    accent_title: Attribute.String;
    subtitle: Attribute.String;
    tabs: Attribute.Component<"organisms.tab", true>;
    textAlign: Attribute.Enumeration<["center", "left"]> &
      Attribute.DefaultTo<"center">;
    title: Attribute.String;
  };
}

export interface ProgramsCurriculumByCampus extends Schema.Component {
  collectionName: "components_programs_curriculum_by_campuses";
  info: {
    description: "";
    displayName: "CurriculumByCampus";
  };
  attributes: {
    campus: Attribute.Relation<
      "programs.curriculum-by-campus",
      "oneToOne",
      "api::campus.campus"
    >;
    curriculum: Attribute.Media<"files">;
  };
}

export interface ProgramsLevelPageConfig extends Schema.Component {
  collectionName: "components_programs_level_page_configs";
  info: {
    displayName: "LevelPageConfig";
  };
  attributes: {
    level: Attribute.Relation<
      "programs.level-page-config",
      "oneToOne",
      "api::level.level"
    >;
    slug: Attribute.String;
  };
}

export interface ProgramsModalityFeature extends Schema.Component {
  collectionName: "components_programs_modality_features";
  info: {
    description: "";
    displayName: "ModalityFeature";
  };
  attributes: {
    admissionProfile: Attribute.Blocks;
    admissionProfile_json: Attribute.JSON;
    admissionRequirements: Attribute.Blocks;
    admissionRequirements_json: Attribute.JSON;
    curriculumDescription: Attribute.Blocks;
    curriculumDescription_json: Attribute.JSON;
    curriculums: Attribute.Component<"programs.curriculum-by-campus", true>;
    graduateProfile: Attribute.Blocks;
    graduateProfile_json: Attribute.JSON;
    labelModality: Attribute.String;
    laborField: Attribute.Blocks;
    laborField_json: Attribute.JSON;
    modality: Attribute.Relation<
      "programs.modality-feature",
      "oneToOne",
      "api::modality.modality"
    >;
    modalityDescription: Attribute.Text;
    programPerks: Attribute.Relation<
      "programs.modality-feature",
      "oneToMany",
      "api::program-perk.program-perk"
    >;
    programStatistics: Attribute.Component<"programs.program-statistics", true>;
    summaries: Attribute.Component<"programs.summary", true>;
  };
}

export interface ProgramsProgramAccordionItem extends Schema.Component {
  collectionName: "components_programs_program_accordion_items";
  info: {
    description: "";
    displayName: "ProgramAccordionItem";
  };
  attributes: {
    campus: Attribute.Relation<
      "programs.program-accordion-item",
      "oneToOne",
      "api::campus.campus"
    >;
    label: Attribute.String;
    level: Attribute.Relation<
      "programs.program-accordion-item",
      "oneToOne",
      "api::level.level"
    >;
    modality: Attribute.Relation<
      "programs.program-accordion-item",
      "oneToOne",
      "api::modality.modality"
    >;
  };
}

export interface ProgramsProgramStatistics extends Schema.Component {
  collectionName: "components_programs_program_statistics";
  info: {
    description: "";
    displayName: "ProgramStatistics";
  };
  attributes: {
    icon: Attribute.String;
    quantity: Attribute.Integer;
    suffix: Attribute.String;
    title: Attribute.String;
  };
}

export interface ProgramsSchedule extends Schema.Component {
  collectionName: "components_programs_schedules";
  info: {
    displayName: "schedule";
  };
  attributes: {
    available_days: Attribute.String & Attribute.DefaultTo<"Martes y Jueves">;
    end_time: Attribute.Time & Attribute.DefaultTo<"22:00">;
    start_time: Attribute.Time & Attribute.DefaultTo<"19:00">;
  };
}

export interface ProgramsSummary extends Schema.Component {
  collectionName: "components_programs_summaries";
  info: {
    displayName: "Summary";
  };
  attributes: {
    subjects: Attribute.Component<"programs.summary-subject", true>;
    title: Attribute.String;
  };
}

export interface ProgramsSummarySubject extends Schema.Component {
  collectionName: "components_programs_summary_subjects";
  info: {
    description: "";
    displayName: "SummarySubject";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsAccordion extends Schema.Component {
  collectionName: "components_sections_accordions";
  info: {
    description: "";
    displayName: "Accordion";
  };
  attributes: {
    accordionItems: Attribute.Component<"sections.accordion-item", true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsAccordionItem extends Schema.Component {
  collectionName: "components_sections_accordion_items";
  info: {
    description: "";
    displayName: "AccordionItem";
  };
  attributes: {
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsAlert extends Schema.Component {
  collectionName: "components_sections_alerts";
  info: {
    description: "";
    displayName: "Alert";
  };
  attributes: {
    iconName: Attribute.String;
    links: Attribute.Component<"sections.link", true>;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsAtrProgramInfo extends Schema.Component {
  collectionName: "components_sections_atr_program_infos";
  info: {
    displayName: "AtrProgramInfo";
  };
  attributes: {
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SectionsAtrProgramPerks extends Schema.Component {
  collectionName: "components_sections_atr_program_perks";
  info: {
    description: "";
    displayName: "AtrProgramPerks";
  };
  attributes: {
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SectionsBanner extends Schema.Component {
  collectionName: "components_sections_banners";
  info: {
    description: "";
    displayName: "Banner-hero";
    icon: "audio-description";
  };
  attributes: {
    contentVariant: Attribute.Enumeration<["light", "dark"]> &
      Attribute.DefaultTo<"light">;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    desktopImage: Attribute.Media<"images"> & Attribute.Required;
    desktopRatio: Attribute.String & Attribute.DefaultTo<"7/2">;
    mobileImage: Attribute.Media<"images">;
    mobileRatio: Attribute.String & Attribute.DefaultTo<"4/3">;
    overlay: Attribute.Enumeration<["none", "white", "black"]>;
    subtitle: Attribute.String;
    tabletImage: Attribute.Media<"images">;
    tabletRatio: Attribute.String & Attribute.DefaultTo<"7/2">;
    textPosition: Attribute.Enumeration<
      [
        "center",
        "center top",
        "center bottom",
        "left top",
        "left center",
        "left bottom",
        "right top",
        "right center",
        "right bottom"
      ]
    > &
      Attribute.DefaultTo<"left top">;
    title: Attribute.String;
  };
}

export interface SectionsBannerCards extends Schema.Component {
  collectionName: "components_sections_banner_cards";
  info: {
    description: "";
    displayName: "BannerIconCard";
    icon: "apps";
  };
  attributes: {
    button: Attribute.Component<"molecules.button">;
    cardIconItem: Attribute.Component<"sections.card-icon", true>;
    desktopImage: Attribute.Media<"images" | "files" | "videos" | "audios">;
    mobileImage: Attribute.Media<"images" | "files" | "videos" | "audios">;
    tabletImage: Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

export interface SectionsBannerNumeralia extends Schema.Component {
  collectionName: "components_sections_banner_numeralias";
  info: {
    description: "";
    displayName: "BannerNumeralia";
  };
  attributes: {
    desktopImage: Attribute.Media<"images"> & Attribute.Required;
    mobileImage: Attribute.Media<"images">;
    overlay: Attribute.Enumeration<["none", "white", "dark"]> &
      Attribute.DefaultTo<"dark">;
    statistics: Attribute.Component<"sections.statistics-card", true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    subtitle: Attribute.Text;
    tabletImage: Attribute.Media<"images">;
    title: Attribute.String;
  };
}

export interface SectionsBlogPostList extends Schema.Component {
  collectionName: "components_sections_blog_post_lists";
  info: {
    displayName: "blog_post_list";
  };
  attributes: {
    blog_posts: Attribute.Relation<
      "sections.blog-post-list",
      "oneToMany",
      "api::blog-post.blog-post"
    >;
  };
}

export interface SectionsBlogPostsPodcast extends Schema.Component {
  collectionName: "components_sections_blog_posts_podcasts";
  info: {
    description: "";
    displayName: "BlogPostsPodcast";
  };
  attributes: {
    banners: Attribute.Component<"sections.banner", true>;
    blogPosts: Attribute.Component<"sections.listconfig">;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    podcastItems: Attribute.Component<"sections.podcast-item", true>;
    podcastItemsTitle: Attribute.String;
  };
}

export interface SectionsCard extends Schema.Component {
  collectionName: "components_sections_cards";
  info: {
    description: "";
    displayName: "Card";
  };
  attributes: {
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    image: Attribute.Media<"images">;
    imageAspectRatio: Attribute.String & Attribute.DefaultTo<"2/1">;
    linkText: Attribute.String;
    linkUrl: Attribute.Text;
    subtitle: Attribute.String;
    title: Attribute.String;
    type: Attribute.Enumeration<["vertical", "horizontal"]> &
      Attribute.DefaultTo<"vertical">;
  };
}

export interface SectionsCardIcon extends Schema.Component {
  collectionName: "components_sections_card_icons";
  info: {
    description: "";
    displayName: "CardIcon";
    icon: "picture";
  };
  attributes: {
    iconColor: Attribute.String;
    IconName: Attribute.String;
    RichText: Attribute.Blocks;
    RichText_json: Attribute.JSON;
  };
}

export interface SectionsCardList extends Schema.Component {
  collectionName: "components_sections_card_lists";
  info: {
    description: "";
    displayName: "Container-cardList";
  };
  attributes: {
    cards: Attribute.Component<"sections.card", true>;
    title: Attribute.String;
  };
}

export interface SectionsCardsDetailContent extends Schema.Component {
  collectionName: "components_sections_cards_detail_contents";
  info: {
    description: "";
    displayName: "CardsDetailContent";
  };
  attributes: {
    cards: Attribute.Component<"sections.card", true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    links: Attribute.Component<"sections.link", true>;
    textPosition: Attribute.Enumeration<["right", "left"]> &
      Attribute.DefaultTo<"left">;
    title: Attribute.String;
  };
}

export interface SectionsCardsStatistics extends Schema.Component {
  collectionName: "components_sections_cards_statistics";
  info: {
    description: "";
    displayName: "CardsStatistics";
  };
  attributes: {
    cards: Attribute.Component<"sections.card", true>;
    cardsPosition: Attribute.Enumeration<["right", "left"]> &
      Attribute.DefaultTo<"left">;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    descriptionCards: Attribute.Blocks;
    descriptionCards_json: Attribute.JSON;
    descriptionStatistics: Attribute.Blocks;
    descriptionStatistics_json: Attribute.JSON;
    statistics: Attribute.Component<"sections.statistics-card", true>;
    title: Attribute.String;
    titleCards: Attribute.String;
    titleStatistics: Attribute.String;
  };
}

export interface SectionsCardsVideoContent extends Schema.Component {
  collectionName: "components_sections_cards_video_contents";
  info: {
    description: "";
    displayName: "CardsVideoContent";
  };
  attributes: {
    button: Attribute.Component<"molecules.button">;
    cards: Attribute.Component<"sections.card", true>;
    subtitle: Attribute.Blocks;
    subtitle_json: Attribute.JSON;
    textPosition: Attribute.Enumeration<["right", "left"]>;
    title: Attribute.String;
    videoItem: Attribute.Component<"sections.video-item">;
  };
}

export interface SectionsCarousel extends Schema.Component {
  collectionName: "components_sections_carousels";
  info: {
    description: "";
    displayName: "Carousel";
  };
  attributes: {
    backgroundColor: Attribute.String;
    button: Attribute.Component<"molecules.button">;
    cards: Attribute.Component<"sections.card", true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    images: Attribute.Component<"sections.mediaquery-images", true>;
    origin: Attribute.Enumeration<["center", "auto"]> &
      Attribute.DefaultTo<"center">;
    title: Attribute.String;
    type: Attribute.Enumeration<["card", "image"]> &
      Attribute.Required &
      Attribute.DefaultTo<"card">;
  };
}

export interface SectionsCategoryAccordionList extends Schema.Component {
  collectionName: "components_sections_category_accordion_lists";
  info: {
    displayName: "CategoryAccordionList";
  };
  attributes: {
    CategoryList: Attribute.Component<"sections.category-list", true>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsCategoryList extends Schema.Component {
  collectionName: "components_sections_category_lists";
  info: {
    displayName: "CategoryList";
  };
  attributes: {
    faq_category: Attribute.Relation<
      "sections.category-list",
      "oneToOne",
      "api::faq-category.faq-category"
    >;
    iconName: Attribute.String;
    label: Attribute.String;
  };
}

export interface SectionsCertificationsSlider extends Schema.Component {
  collectionName: "components_sections_certifications_sliders";
  info: {
    displayName: "CertificationsSlider";
  };
  attributes: {
    certifications: Attribute.Component<"sections.slide-certifications", true>;
    title: Attribute.String;
  };
}

export interface SectionsColorCard extends Schema.Component {
  collectionName: "components_sections_color_cards";
  info: {
    description: "";
    displayName: "colorCard";
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
  collectionName: "components_sections_color_card_lists";
  info: {
    description: "";
    displayName: "ColorCardList";
  };
  attributes: {
    alternativeText: Attribute.Blocks;
    alternativeText_json: Attribute.JSON;
    cards: Attribute.Component<"sections.color-card", true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsContEdPrograms extends Schema.Component {
  collectionName: "components_sections_cont_ed_programs";
  info: {
    description: "";
    displayName: "Container-educacionContinua";
  };
  attributes: {
    knowledgeAreas: Attribute.Relation<
      "sections.cont-ed-programs",
      "oneToMany",
      "api::knowledge-area.knowledge-area"
    >;
  };
}

export interface SectionsContactTargetCard extends Schema.Component {
  collectionName: "components_sections_contact_target_cards";
  info: {
    description: "";
    displayName: "ContactTargetCard";
  };
  attributes: {
    email: Attribute.Email;
    image: Attribute.Media<"images">;
    link: Attribute.String;
    phone: Attribute.String;
    textLink: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsContactTargetList extends Schema.Component {
  collectionName: "components_sections_contact_target_lists";
  info: {
    description: "";
    displayName: "Container-contactTargetList";
  };
  attributes: {
    cards: Attribute.Component<"sections.contact-target-card", true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsContainerOutstandingList extends Schema.Component {
  collectionName: "components_sections_container_outstanding_lists";
  info: {
    displayName: "container-outstandingList";
  };
  attributes: {
    outstandings: Attribute.Component<"sections.outstanding", true>;
    title: Attribute.String;
  };
}

export interface SectionsContainerTextForm extends Schema.Component {
  collectionName: "components_sections_container_text_forms";
  info: {
    description: "";
    displayName: "container-text-form";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    desktopBgImage: Attribute.Media<"images">;
    form: Attribute.Component<"sections.form-container">;
    mobileBgImage: Attribute.Media<"images">;
    tabletBgImage: Attribute.Media<"images" | "files" | "videos" | "audios">;
    title: Attribute.String;
    title_accents: Attribute.Component<"atoms.text", true>;
  };
}

export interface SectionsEntryconfig extends Schema.Component {
  collectionName: "components_sections_entryconfigs";
  info: {
    description: "";
    displayName: "entryconfig";
    icon: "apple-alt";
  };
  attributes: {
    ctaText: Attribute.String;
    ctaUrl: Attribute.Text;
    relatesto: Attribute.Enumeration<["Blog entry", "Page entry"]> &
      Attribute.Required &
      Attribute.DefaultTo<"Blog entry">;
  };
}

export interface SectionsEventsCardContainer extends Schema.Component {
  collectionName: "components_sections_events_card_containers";
  info: {
    description: "";
    displayName: "events card container";
  };
  attributes: {
    max_entries: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<5>;
    title: Attribute.String;
  };
}

export interface SectionsExternalPostByCategoryList extends Schema.Component {
  collectionName: "components_sections_epcl";
  info: {
    description: "";
    displayName: "ExternalPostByCategoryList";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    externalPostCategories: Attribute.Relation<
      "sections.external-post-by-category-list",
      "oneToMany",
      "api::extpost-category.extpost-category"
    >;
    title: Attribute.String;
  };
}

export interface SectionsFaqImage extends Schema.Component {
  collectionName: "components_sections_faq_images";
  info: {
    description: "";
    displayName: "faqImage";
    icon: "dashboard";
  };
  attributes: {
    button: Attribute.Component<"molecules.button">;
    faq: Attribute.Component<"sections.faq-section">;
    image: Attribute.Media<"images">;
    imgPosition: Attribute.Enumeration<["left", "right"]> &
      Attribute.DefaultTo<"right">;
    title: Attribute.String;
  };
}

export interface SectionsFaqSection extends Schema.Component {
  collectionName: "components_sections_faq_sections";
  info: {
    description: "";
    displayName: "Container-FAQsection";
  };
  attributes: {
    component: Attribute.Enumeration<["accordion", "card", "list"]>;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    faqCategory: Attribute.Relation<
      "sections.faq-section",
      "oneToOne",
      "api::faq-category.faq-category"
    >;
    faqs: Attribute.Component<"sections.listconfig">;
    title: Attribute.String;
  };
}

export interface SectionsFormContainer extends Schema.Component {
  collectionName: "components_sections_form_containers";
  info: {
    description: "";
    displayName: "Container-form";
  };
  attributes: {
    button: Attribute.Component<"molecules.button">;
    description: Attribute.Text;
    errors: Attribute.Component<"sections.web-error", true>;
    extraText: Attribute.Text;
    form: Attribute.Enumeration<
      [
        "Clinicas Dentales",
        "Doble Titulacion",
        "Agendar visita",
        "Pagina programa",
        "Empleabilidad"
      ]
    >;
    image: Attribute.Media<"images">;
    position: Attribute.Enumeration<["left", "center", "right"]>;
    prefilledData: Attribute.JSON;
    privacyPolicy: Attribute.Component<"sections.privacy-policy">;
    progress: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    title: Attribute.String;
    width: Attribute.Enumeration<
      ["w-12/12", "w-11/12", "w-10/12", "w-9/12", "w-8/12", "w-7/12", "w-6/12"]
    >;
  };
}

export interface SectionsFormVideo extends Schema.Component {
  collectionName: "components_sections_form_videos";
  info: {
    description: "";
    displayName: "Container-formVideo";
    icon: "archway";
  };
  attributes: {
    formDescription: Attribute.Text;
    formImage: Attribute.Media<"images">;
    formTitle: Attribute.String;
    privacyPolicy: Attribute.Media<"files">;
    privacyPolicyText: Attribute.Text;
    videoTitle: Attribute.String;
    youtubeId: Attribute.String;
  };
}

export interface SectionsGoogleMap extends Schema.Component {
  collectionName: "components_sections_google_maps";
  info: {
    description: "";
    displayName: "GoogleMap";
  };
  attributes: {
    address: Attribute.Text;
    admissionPhone: Attribute.String;
    detailPosition: Attribute.Enumeration<["left", "right", "top"]>;
    name: Attribute.String;
    receptionPhone: Attribute.String;
    schedule: Attribute.String;
    src: Attribute.Text & Attribute.Required;
    title: Attribute.String;
    type: Attribute.Enumeration<["tour", "map"]> & Attribute.DefaultTo<"map">;
  };
}

export interface SectionsGraduatesForm extends Schema.Component {
  collectionName: "components_sections_graduates_forms";
  info: {
    description: "";
    displayName: "GraduatesForm";
  };
  attributes: {
    overflowForm: Attribute.Boolean;
    subtitle: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: "components_sections_heroes";
  info: {
    description: "";
    displayName: "hero";
    icon: "ad";
  };
  attributes: {
    contentVariant: Attribute.Enumeration<["light", "dark"]> &
      Attribute.Required;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    desktopImage: Attribute.Media<"images"> & Attribute.Required;
    mobileImage: Attribute.Media<"images">;
    overlay: Attribute.Enumeration<["none", "white", "black"]>;
    subtitle: Attribute.String;
    tabletImage: Attribute.Media<"images">;
    textPosition: Attribute.Enumeration<
      [
        "center",
        "center top",
        "center bottom",
        "left top",
        "left center",
        "left bottom",
        "right top",
        "right center",
        "right bottom"
      ]
    > &
      Attribute.Required;
    title: Attribute.String;
  };
}

export interface SectionsHeroSlider extends Schema.Component {
  collectionName: "components_sections_hero_sliders";
  info: {
    description: "";
    displayName: "Slider-hero";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    slide: Attribute.Component<"sections.hero", true>;
    title: Attribute.String;
  };
}

export interface SectionsIconTextItem extends Schema.Component {
  collectionName: "components_sections_icon_text_items";
  info: {
    description: "";
    displayName: "IconTextItem";
  };
  attributes: {
    iconName: Attribute.String;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsIconTextListImage extends Schema.Component {
  collectionName: "components_sections_icon_text_list_images";
  info: {
    description: "";
    displayName: "IconTextListImage";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    desktopImage: Attribute.Media<"images">;
    iconTextList: Attribute.Component<"sections.icon-text-item", true>;
    imagePosition: Attribute.Enumeration<["left", "right"]> &
      Attribute.DefaultTo<"right">;
    mobileImage: Attribute.Media<"images">;
    tabletImage: Attribute.Media<"images">;
    title: Attribute.String;
  };
}

export interface SectionsImageCard extends Schema.Component {
  collectionName: "components_sections_image_cards";
  info: {
    description: "";
    displayName: "imageCard";
  };
  attributes: {
    image: Attribute.Media<"images"> & Attribute.Required;
    linkIconFirst: Attribute.String;
    linkIconSecond: Attribute.String;
    linkText: Attribute.String;
    linkUrl: Attribute.Text;
    subtitle: Attribute.Text;
    title: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsImageCardList extends Schema.Component {
  collectionName: "components_sections_image_card_lists";
  info: {
    description: "";
    displayName: "imageCardList";
  };
  attributes: {
    imageCards: Attribute.Component<"sections.image-card", true>;
    orientation: Attribute.Enumeration<["vertical", "horizontal"]> &
      Attribute.Required;
    title: Attribute.String;
  };
}

export interface SectionsIntroductionImage extends Schema.Component {
  collectionName: "components_sections_introduction_images";
  info: {
    description: "";
    displayName: "IntroductionImage";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    images: Attribute.Component<"sections.mediaquery-images", true>;
    title: Attribute.String;
  };
}

export interface SectionsKnowledgeAreaFilter extends Schema.Component {
  collectionName: "components_sections_knowledge_area_filters";
  info: {
    displayName: "KnowledgeAreaFilter";
  };
  attributes: {
    area: Attribute.Relation<
      "sections.knowledge-area-filter",
      "oneToOne",
      "api::knowledge-area.knowledge-area"
    >;
  };
}

export interface SectionsLeaderboard extends Schema.Component {
  collectionName: "components_sections_leaderboards";
  info: {
    description: "";
    displayName: "Banner-leaderboard";
  };
  attributes: {
    button: Attribute.Component<"molecules.button">;
    contentVariant: Attribute.Enumeration<["light", "dark"]> &
      Attribute.Required &
      Attribute.DefaultTo<"light">;
    desktopImage: Attribute.Media<"images"> & Attribute.Required;
    links: Attribute.Component<"sections.link", true>;
    mobileImage: Attribute.Media<"images">;
    overlay: Attribute.Enumeration<["none", "white", "dark"]>;
    subtitleIcon: Attribute.String;
    subtitleText: Attribute.Text;
    tabletImage: Attribute.Media<"images">;
    title: Attribute.String;
  };
}

export interface SectionsLevels extends Schema.Component {
  collectionName: "components_sections_levels";
  info: {
    description: "";
    displayName: "Levels";
  };
  attributes: {
    levels: Attribute.Relation<
      "sections.levels",
      "oneToMany",
      "api::level.level"
    >;
    title: Attribute.String;
  };
}

export interface SectionsLink extends Schema.Component {
  collectionName: "components_sections_links";
  info: {
    description: "";
    displayName: "Link";
  };
  attributes: {
    disabled: Attribute.Boolean;
    download: Attribute.Boolean & Attribute.DefaultTo<false>;
    href: Attribute.String;
    iconName: Attribute.String;
    iconPosition: Attribute.Enumeration<["left", "right"]> &
      Attribute.DefaultTo<"left">;
    target: Attribute.Enumeration<["_self", "_blank"]> &
      Attribute.DefaultTo<"_blank">;
    text: Attribute.String;
  };
}

export interface SectionsLinkList extends Schema.Component {
  collectionName: "components_sections_link_lists";
  info: {
    description: "";
    displayName: "Container-linkList";
  };
  attributes: {
    links: Attribute.Component<"sections.link", true>;
    title: Attribute.String;
  };
}

export interface SectionsListconfig extends Schema.Component {
  collectionName: "components_sections_listconfigs";
  info: {
    description: "";
    displayName: "Container-Listconfig";
    icon: "tasks";
  };
  attributes: {
    maxentries: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<12>;
    relatesto: Attribute.Enumeration<
      ["blogentries", "pages", "faq", "vacancies", "podcasts"]
    >;
    sortdate: Attribute.Enumeration<["latest", "earliest"]> &
      Attribute.DefaultTo<"latest">;
    title: Attribute.String;
  };
}

export interface SectionsMediaqueryImages extends Schema.Component {
  collectionName: "components_sections_mediaquery_images";
  info: {
    description: "";
    displayName: "mediaqueryImages";
  };
  attributes: {
    desktopImage: Attribute.Media<"images"> & Attribute.Required;
    desktopRatio: Attribute.String & Attribute.DefaultTo<"2/1">;
    mobileImage: Attribute.Media<"images">;
    mobileRatio: Attribute.String & Attribute.DefaultTo<"4/3">;
    tabletImage: Attribute.Media<"images">;
    tabletRatio: Attribute.String & Attribute.DefaultTo<"2/1">;
  };
}

export interface SectionsMetaSocial extends Schema.Component {
  collectionName: "components_sections_meta_socials";
  info: {
    displayName: "MetaSocial";
    icon: "earth";
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<"images">;
    socialNetwork: Attribute.Enumeration<["Facebook", "Twitter"]> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SectionsModal extends Schema.Component {
  collectionName: "components_sections_modals";
  info: {
    displayName: "Modal";
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsModalityCharacteristics extends Schema.Component {
  collectionName: "components_sections_modality_characteristics";
  info: {
    description: "";
    displayName: "modalityCharacteristics";
  };
  attributes: {
    InformativeIcons: Attribute.Component<"molecules.informative-icon", true>;
    subtitle: Attribute.Blocks;
    subtitle_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsModalityFilter extends Schema.Component {
  collectionName: "components_sections_modality_filters";
  info: {
    displayName: "ModalityFilter";
  };
  attributes: {
    modality: Attribute.Relation<
      "sections.modality-filter",
      "oneToOne",
      "api::modality.modality"
    >;
  };
}

export interface SectionsMosaic extends Schema.Component {
  collectionName: "components_sections_mosaics";
  info: {
    description: "";
    displayName: "Mosaic";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    images: Attribute.Component<"molecules.image", true>;
    title: Attribute.String;
  };
}

export interface SectionsOffer extends Schema.Component {
  collectionName: "components_sections_offers";
  info: {
    description: "";
    displayName: "Offer Items";
    icon: "align-justify";
  };
  attributes: {
    levels: Attribute.Relation<
      "sections.offer",
      "oneToMany",
      "api::level.level"
    >;
    title: Attribute.String;
  };
}

export interface SectionsOutstanding extends Schema.Component {
  collectionName: "components_sections_outstandings";
  info: {
    description: "";
    displayName: "OutstandingItem";
  };
  attributes: {
    backgroundColor: Attribute.String & Attribute.Required;
    backgroundWidth: Attribute.Enumeration<["w-full", "w-3/4"]> &
      Attribute.DefaultTo<"w-full">;
    button: Attribute.Component<"molecules.button">;
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    contentVariant: Attribute.Enumeration<["dark", "light"]> &
      Attribute.DefaultTo<"dark">;
    image: Attribute.Media<"images"> & Attribute.Required;
    imagePosition: Attribute.Enumeration<["left", "right"]> &
      Attribute.DefaultTo<"right">;
    title: Attribute.String;
  };
}

export interface SectionsOverlayCard extends Schema.Component {
  collectionName: "components_sections_overlay_cards";
  info: {
    description: "";
    displayName: "overlayCard";
  };
  attributes: {
    image: Attribute.Media<"images">;
    overlayColor: Attribute.String;
    title: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsOverlayCardList extends Schema.Component {
  collectionName: "components_sections_overlay_card_lists";
  info: {
    description: "";
    displayName: "OverlayCardList";
  };
  attributes: {
    overlayCards: Attribute.Component<"sections.overlay-card", true>;
    title: Attribute.Text;
  };
}

export interface SectionsPixel extends Schema.Component {
  collectionName: "components_sections_pixels";
  info: {
    displayName: "Pixel";
  };
  attributes: {
    element: Attribute.Enumeration<["iframe", "img"]>;
    src: Attribute.String & Attribute.Required;
  };
}

export interface SectionsPodcastItem extends Schema.Component {
  collectionName: "components_sections_podcast_items";
  info: {
    displayName: "PodcastItem";
  };
  attributes: {
    format: Attribute.Enumeration<["normal", "compact"]>;
    podcastItem: Attribute.Relation<
      "sections.podcast-item",
      "oneToOne",
      "api::podcast.podcast"
    >;
  };
}

export interface SectionsPodcastList extends Schema.Component {
  collectionName: "components_sections_podcast_lists";
  info: {
    description: "";
    displayName: "EmbedPodcast";
  };
  attributes: {
    podcastItems: Attribute.Component<"sections.podcast-item", true>;
    title: Attribute.String;
  };
}

export interface SectionsPrices extends Schema.Component {
  collectionName: "components_sections_prices";
  info: {
    description: "";
    displayName: "prices";
  };
  attributes: {
    general_perks: Attribute.Component<"atoms.text", true>;
    price: Attribute.Component<"molecules.price-card", true>;
  };
}

export interface SectionsPrivacyPolicy extends Schema.Component {
  collectionName: "components_sections_privacy_policies";
  info: {
    displayName: "privacyPolicy";
  };
  attributes: {
    file: Attribute.Media<"files"> & Attribute.Required;
    linkText: Attribute.String;
    text: Attribute.String;
  };
}

export interface SectionsProgramAccordionList extends Schema.Component {
  collectionName: "components_sections_program_accordion_lists";
  info: {
    description: "";
    displayName: "ProgramAccordionList";
  };
  attributes: {
    programAccordionItems: Attribute.Component<
      "programs.program-accordion-item",
      true
    >;
    title: Attribute.String;
  };
}

export interface SectionsProgramsFilter extends Schema.Component {
  collectionName: "components_sections_programs_filters";
  info: {
    description: "";
    displayName: "Container-ProgramsFilter";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    level: Attribute.Relation<
      "sections.programs-filter",
      "oneToOne",
      "api::level.level"
    >;
    modalities: Attribute.Relation<
      "sections.programs-filter",
      "oneToMany",
      "api::modality.modality"
    >;
    title: Attribute.String;
  };
}

export interface SectionsPromoLink extends Schema.Component {
  collectionName: "components_sections_promo_links";
  info: {
    description: "";
    displayName: "PromoLinkItem";
  };
  attributes: {
    color: Attribute.String;
    link: Attribute.Text;
    text: Attribute.String & Attribute.Required;
  };
}

export interface SectionsPromoLinkList extends Schema.Component {
  collectionName: "components_sections_promo_link_lists";
  info: {
    description: "";
    displayName: "Container-PromoLinkList";
  };
  attributes: {
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    promoLinks: Attribute.Component<"sections.promo-link", true>;
    title: Attribute.Text;
  };
}

export interface SectionsRepeatableBanner extends Schema.Component {
  collectionName: "components_sections_repeatable_banners";
  info: {
    description: "";
    displayName: "RepeatableBanner";
  };
  attributes: {
    banners: Attribute.Component<"sections.banner", true>;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsRichTextImage extends Schema.Component {
  collectionName: "components_sections_rich_text_images";
  info: {
    description: "";
    displayName: "RichTextImage";
  };
  attributes: {
    backgroundColor: Attribute.String;
    buttons: Attribute.Component<"molecules.button", true>;
    contentVariant: Attribute.Enumeration<["light", "dark"]> &
      Attribute.DefaultTo<"dark">;
    image: Attribute.Media<"images">;
    imagePosition: Attribute.Enumeration<["left", "right"]> &
      Attribute.DefaultTo<"right">;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsRichTextImageBgImage extends Schema.Component {
  collectionName: "components_sections_rich_text_image_bg_images";
  info: {
    description: "";
    displayName: "RichTextImageBgImage";
  };
  attributes: {
    desktopBgImage: Attribute.Media<"images">;
    mobileBgImage: Attribute.Media<"images">;
    RichTextImage: Attribute.Component<"sections.rich-text-image">;
    tabletBgImage: Attribute.Media<"images">;
  };
}

export interface SectionsRichTextVideo extends Schema.Component {
  collectionName: "components_sections_rich_text_videos";
  info: {
    description: "";
    displayName: "RichTextVideo";
  };
  attributes: {
    backgroundColor: Attribute.String;
    buttons: Attribute.Component<"molecules.button", true>;
    contentVariant: Attribute.Enumeration<["dark", "light"]> &
      Attribute.DefaultTo<"dark">;
    provider: Attribute.Enumeration<["Youtube", "Vimeo"]> &
      Attribute.DefaultTo<"Youtube">;
    providerId: Attribute.String;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
    videoPosition: Attribute.Enumeration<["left", "right"]> &
      Attribute.DefaultTo<"left">;
  };
}

export interface SectionsRockstarInfo extends Schema.Component {
  collectionName: "components_sections_rockstar_infos";
  info: {
    description: "";
    displayName: "RockstarInfo";
  };
  attributes: {
    campus: Attribute.Relation<
      "sections.rockstar-info",
      "oneToOne",
      "api::campus.campus"
    >;
    detail: Attribute.Blocks;
    detail_json: Attribute.JSON;
    image: Attribute.Media<"images">;
    name: Attribute.String;
  };
}

export interface SectionsRockstarInfoList extends Schema.Component {
  collectionName: "components_sections_rockstar_info_lists";
  info: {
    description: "";
    displayName: "RockstarInfoList";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    rockstars: Attribute.Component<"sections.rockstar-info", true>;
    title: Attribute.String;
  };
}

export interface SectionsRvoeAccordionList extends Schema.Component {
  collectionName: "components_sections_rvoe_accordion_lists";
  info: {
    description: "";
    displayName: "RvoeAccordionList";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    rvoeList: Attribute.Component<"sections.rvoe-list", true>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsRvoeList extends Schema.Component {
  collectionName: "components_sections_rvoe_lists";
  info: {
    description: "";
    displayName: "rvoeList";
  };
  attributes: {
    iconName: Attribute.String;
    label: Attribute.String;
    modalityCategory: Attribute.Relation<
      "sections.rvoe-list",
      "oneToOne",
      "api::modality-category.modality-category"
    >;
  };
}

export interface SectionsScriptPixel extends Schema.Component {
  collectionName: "components_sections_script_pixels";
  info: {
    description: "";
    displayName: "ScriptPixel";
  };
  attributes: {
    async: Attribute.Boolean & Attribute.DefaultTo<false>;
    crossorigin: Attribute.Boolean & Attribute.DefaultTo<false>;
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    integrity: Attribute.String;
    name: Attribute.String & Attribute.Required;
    pixel: Attribute.Component<"sections.pixel">;
    script: Attribute.Text;
    src: Attribute.String;
    strategy: Attribute.Enumeration<
      ["afterInteractive", "beforeInteractive", "lazyOnload", "worker"]
    > &
      Attribute.DefaultTo<"afterInteractive">;
    triggerOnRouteChange: Attribute.Enumeration<
      ["gtagPageview", "fbqPageview"]
    >;
  };
}

export interface SectionsSeo extends Schema.Component {
  collectionName: "components_sections_seos";
  info: {
    displayName: "seo";
    icon: "file";
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
    metaImage: Attribute.Media<"images"> & Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<"sections.meta-social", true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SectionsSlideCertifications extends Schema.Component {
  collectionName: "components_sections_slide_certifications";
  info: {
    description: "";
    displayName: "slideCertifications";
  };
  attributes: {
    image: Attribute.Media<"images">;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
  };
}

export interface SectionsStatisticsCard extends Schema.Component {
  collectionName: "components_sections_statistics_cards";
  info: {
    description: "";
    displayName: "NumbersItem";
    icon: "address-book";
  };
  attributes: {
    body: Attribute.String;
    color: Attribute.String;
    iconName: Attribute.String;
    maxNumber: Attribute.Integer;
    prefix: Attribute.String;
    suffix: Attribute.String;
    title: Attribute.String;
    variant: Attribute.Enumeration<["default", "stroke", "shadow"]> &
      Attribute.DefaultTo<"default">;
  };
}

export interface SectionsStatisticsCardList extends Schema.Component {
  collectionName: "components_sections_statistics_card_lists";
  info: {
    description: "";
    displayName: "Numbers";
    icon: "bars";
  };
  attributes: {
    cards: Attribute.Component<"sections.statistics-card", true> &
      Attribute.Required;
  };
}

export interface SectionsTestimonialCard extends Schema.Component {
  collectionName: "components_sections_testimonial_cards";
  info: {
    description: "";
    displayName: "testimonialCard";
  };
  attributes: {
    subtitle: Attribute.String;
    testimonialImage: Attribute.Media<"images">;
    testimonialText: Attribute.Blocks;
    testimonialText_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsTestimonialSlider extends Schema.Component {
  collectionName: "components_sections_testimonial_sliders";
  info: {
    description: "";
    displayName: "TestimonialSlider";
  };
  attributes: {
    bgImageDesktop: Attribute.Media<"images">;
    bgImageMobile: Attribute.Media<"images">;
    bgImageTablet: Attribute.Media<"images">;
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    testimonialCards: Attribute.Component<"sections.testimonial-card", true>;
    title: Attribute.String;
  };
}

export interface SectionsTextContent extends Schema.Component {
  collectionName: "components_sections_text_contents";
  info: {
    description: "";
    displayName: "TextContent";
  };
  attributes: {
    subtitle: Attribute.String;
    text: Attribute.Blocks;
    text_json: Attribute.JSON;
    title: Attribute.String;
  };
}

export interface SectionsTextImage extends Schema.Component {
  collectionName: "components_sections_text_images";
  info: {
    description: "";
    displayName: "TextImage";
  };
  attributes: {
    content: Attribute.Blocks;
    content_json: Attribute.JSON;
    image: Attribute.Media<"images">;
  };
}

export interface SectionsVideoImage extends Schema.Component {
  collectionName: "components_sections_video_images";
  info: {
    displayName: "videoImage";
  };
  attributes: {
    Button: Attribute.Component<"molecules.button">;
    images: Attribute.Component<"molecules.image", true>;
    subtitle: Attribute.String;
    title: Attribute.String;
    Video: Attribute.Component<"sections.video-item">;
  };
}

export interface SectionsVideoItem extends Schema.Component {
  collectionName: "components_sections_video_items";
  info: {
    displayName: "VideoItem";
  };
  attributes: {
    provider: Attribute.Enumeration<["youtube", "vimeo"]> &
      Attribute.DefaultTo<"youtube">;
    providerId: Attribute.String;
  };
}

export interface SectionsVideos extends Schema.Component {
  collectionName: "components_sections_videos";
  info: {
    description: "";
    displayName: "Videos";
  };
  attributes: {
    description: Attribute.Blocks;
    description_json: Attribute.JSON;
    title: Attribute.String;
    videos: Attribute.Component<"sections.video-item", true>;
  };
}

export interface SectionsWebError extends Schema.Component {
  collectionName: "components_sections_web_errors";
  info: {
    description: "";
    displayName: "web error";
  };
  attributes: {
    button: Attribute.Component<"sections.link">;
    errorCode: Attribute.String;
    message: Attribute.String;
    title: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: "components_shared_meta_socials";
  info: {
    displayName: "metaSocial";
    icon: "project-diagram";
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<"images" | "files" | "videos">;
    socialNetwork: Attribute.Enumeration<["Facebook", "Twitter"]> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "seo";
    icon: "search";
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<"images" | "files" | "videos"> &
      Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<"shared.meta-social", true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "atoms.level-text": AtomsLevelText;
      "atoms.phone": AtomsPhone;
      "atoms.text": AtomsText;
      "events.event-agenda": EventsEventAgenda;
      "events.event-location": EventsEventLocation;
      "events.youtube-video": EventsYoutubeVideo;
      "misc.send-whatsapp": MiscSendWhatsapp;
      "molecules.button": MoleculesButton;
      "molecules.footer-column": MoleculesFooterColumn;
      "molecules.footer-group-items": MoleculesFooterGroupItems;
      "molecules.image": MoleculesImage;
      "molecules.info-alert": MoleculesInfoAlert;
      "molecules.informative-icon": MoleculesInformativeIcon;
      "molecules.menu-item": MoleculesMenuItem;
      "molecules.menu-layout": MoleculesMenuLayout;
      "molecules.price-card": MoleculesPriceCard;
      "molecules.submenu-item": MoleculesSubmenuItem;
      "molecules.submenu-item-2": MoleculesSubmenuItem2;
      "molecules.submenu-item-3": MoleculesSubmenuItem3;
      "organisms.footer-section": OrganismsFooterSection;
      "organisms.tab": OrganismsTab;
      "organisms.tab-list": OrganismsTabList;
      "programs.curriculum-by-campus": ProgramsCurriculumByCampus;
      "programs.level-page-config": ProgramsLevelPageConfig;
      "programs.modality-feature": ProgramsModalityFeature;
      "programs.program-accordion-item": ProgramsProgramAccordionItem;
      "programs.program-statistics": ProgramsProgramStatistics;
      "programs.schedule": ProgramsSchedule;
      "programs.summary": ProgramsSummary;
      "programs.summary-subject": ProgramsSummarySubject;
      "sections.accordion": SectionsAccordion;
      "sections.accordion-item": SectionsAccordionItem;
      "sections.alert": SectionsAlert;
      "sections.atr-program-info": SectionsAtrProgramInfo;
      "sections.atr-program-perks": SectionsAtrProgramPerks;
      "sections.banner": SectionsBanner;
      "sections.banner-cards": SectionsBannerCards;
      "sections.banner-numeralia": SectionsBannerNumeralia;
      "sections.blog-post-list": SectionsBlogPostList;
      "sections.blog-posts-podcast": SectionsBlogPostsPodcast;
      "sections.card": SectionsCard;
      "sections.card-icon": SectionsCardIcon;
      "sections.card-list": SectionsCardList;
      "sections.cards-detail-content": SectionsCardsDetailContent;
      "sections.cards-statistics": SectionsCardsStatistics;
      "sections.cards-video-content": SectionsCardsVideoContent;
      "sections.carousel": SectionsCarousel;
      "sections.category-accordion-list": SectionsCategoryAccordionList;
      "sections.category-list": SectionsCategoryList;
      "sections.certifications-slider": SectionsCertificationsSlider;
      "sections.color-card": SectionsColorCard;
      "sections.color-card-list": SectionsColorCardList;
      "sections.cont-ed-programs": SectionsContEdPrograms;
      "sections.contact-target-card": SectionsContactTargetCard;
      "sections.contact-target-list": SectionsContactTargetList;
      "sections.container-outstanding-list": SectionsContainerOutstandingList;
      "sections.container-text-form": SectionsContainerTextForm;
      "sections.entryconfig": SectionsEntryconfig;
      "sections.events-card-container": SectionsEventsCardContainer;
      "sections.external-post-by-category-list": SectionsExternalPostByCategoryList;
      "sections.faq-image": SectionsFaqImage;
      "sections.faq-section": SectionsFaqSection;
      "sections.form-container": SectionsFormContainer;
      "sections.form-video": SectionsFormVideo;
      "sections.google-map": SectionsGoogleMap;
      "sections.graduates-form": SectionsGraduatesForm;
      "sections.hero": SectionsHero;
      "sections.hero-slider": SectionsHeroSlider;
      "sections.icon-text-item": SectionsIconTextItem;
      "sections.icon-text-list-image": SectionsIconTextListImage;
      "sections.image-card": SectionsImageCard;
      "sections.image-card-list": SectionsImageCardList;
      "sections.introduction-image": SectionsIntroductionImage;
      "sections.knowledge-area-filter": SectionsKnowledgeAreaFilter;
      "sections.leaderboard": SectionsLeaderboard;
      "sections.levels": SectionsLevels;
      "sections.link": SectionsLink;
      "sections.link-list": SectionsLinkList;
      "sections.listconfig": SectionsListconfig;
      "sections.mediaquery-images": SectionsMediaqueryImages;
      "sections.meta-social": SectionsMetaSocial;
      "sections.modal": SectionsModal;
      "sections.modality-characteristics": SectionsModalityCharacteristics;
      "sections.modality-filter": SectionsModalityFilter;
      "sections.mosaic": SectionsMosaic;
      "sections.offer": SectionsOffer;
      "sections.outstanding": SectionsOutstanding;
      "sections.overlay-card": SectionsOverlayCard;
      "sections.overlay-card-list": SectionsOverlayCardList;
      "sections.pixel": SectionsPixel;
      "sections.podcast-item": SectionsPodcastItem;
      "sections.podcast-list": SectionsPodcastList;
      "sections.prices": SectionsPrices;
      "sections.privacy-policy": SectionsPrivacyPolicy;
      "sections.program-accordion-list": SectionsProgramAccordionList;
      "sections.programs-filter": SectionsProgramsFilter;
      "sections.promo-link": SectionsPromoLink;
      "sections.promo-link-list": SectionsPromoLinkList;
      "sections.repeatable-banner": SectionsRepeatableBanner;
      "sections.rich-text-image": SectionsRichTextImage;
      "sections.rich-text-image-bg-image": SectionsRichTextImageBgImage;
      "sections.rich-text-video": SectionsRichTextVideo;
      "sections.rockstar-info": SectionsRockstarInfo;
      "sections.rockstar-info-list": SectionsRockstarInfoList;
      "sections.rvoe-accordion-list": SectionsRvoeAccordionList;
      "sections.rvoe-list": SectionsRvoeList;
      "sections.script-pixel": SectionsScriptPixel;
      "sections.seo": SectionsSeo;
      "sections.slide-certifications": SectionsSlideCertifications;
      "sections.statistics-card": SectionsStatisticsCard;
      "sections.statistics-card-list": SectionsStatisticsCardList;
      "sections.testimonial-card": SectionsTestimonialCard;
      "sections.testimonial-slider": SectionsTestimonialSlider;
      "sections.text-content": SectionsTextContent;
      "sections.text-image": SectionsTextImage;
      "sections.video-image": SectionsVideoImage;
      "sections.video-item": SectionsVideoItem;
      "sections.videos": SectionsVideos;
      "sections.web-error": SectionsWebError;
      "shared.meta-social": SharedMetaSocial;
      "shared.seo": SharedSeo;
    }
  }
}
