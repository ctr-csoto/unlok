/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Models = sequelize.define(
    'Models',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
                unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      epercentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 70
      },
      facebook_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      model_message_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      ccbill: {
        type: DataTypes.STRING,
        allowNull: true
      },
      epoch: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      profile_pic: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      middle_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sub_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10
      },
      date_registered: {
        type: DataTypes.DATE,
        allowNull: true
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      hidden: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      completed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'sub'
      },
      lang: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'en'
      },
      pw_hash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: true
      },
      emails_sent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      freeze: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      referral: {
        type: DataTypes.STRING,
        allowNull: true
      },
      accepted: {
        type: DataTypes.DATE,
        allowNull: true
      },
      documents_submitted: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      waiting_room: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      header: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      fire: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      quit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      finalize: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      message_system: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subcategory: {
        type: DataTypes.STRING,
        allowNull: true
      },
      delete_limit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5
      },
      service_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2
      },
      first_ccbill: {
        type: DataTypes.DATE,
        allowNull: true
      },
      followers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      last_ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sub_system: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      vip_system: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      vip_bio: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gallery_known: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      closer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      auto_reply: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      on_hold: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      ads_bio: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      time_quit: {
        type: DataTypes.DATE,
        allowNull: true
      },
      time_fired: {
        type: DataTypes.DATE,
        allowNull: true
      },
      see_payments: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      twitter: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tiktok: {
        type: DataTypes.STRING,
        allowNull: true
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true
      },
      recommended: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      warnings: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      id_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      form_submitted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      form_upload: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      form_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      hide: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      recommended_messages: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      recommended_feeds: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      recommended_creators: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      recommended_page: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      recommended_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      stars: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 3.4
      },
      test: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      half_discount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      super: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      first_failed_login: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      failed_login_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      sub_model: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      youtube: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amazon: {
        type: DataTypes.STRING,
        allowNull: true
      },
      www: {
        type: DataTypes.STRING,
        allowNull: true
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: true
      },
      agency: {
        type: DataTypes.STRING,
        allowNull: true
      },
      receive_telegram: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      telegram_chat_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      statistics_table_target: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      statistics_table_added: {
        type: DataTypes.DATE,
        allowNull: true
      },
      my_id_require: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      my_id_back_require: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      face_id_require: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      email_confirm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      payments_locked: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      first_time_logged_in: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      main_video: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      main_video_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      welcome_video: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      welcome_video_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      promo_video: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      promo_video_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      ads_video: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ads_video_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      last_info_updated: {
        type: DataTypes.DATE,
        allowNull: true
      },
      first_info_uploaded: {
        type: DataTypes.DATE,
        allowNull: true
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      notifications_seen: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      profile_pic_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      cover_pic_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      brought_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      reels_likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      earnings_locked: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      other_social_media: {
        type: DataTypes.STRING,
        allowNull: true
      },
      free_pictures_aware: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true
      },
      watermarking: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
    },
    {
      tableName: 'models',
      timestamps: false,
      underscored: true
    }
  );

  Models.associate = (modelsClass) => {
    const { AdminSideModelCheckboxes, AdminSideSelectBoxes, AdminStatistics, AdminStatisticsNotes, Ads, AdsPurchases, BlockedChats, ChristmasContent, CronModelEarningsNew, Directa24Request, Discount, DiscountsGivenHistory, EmailNotificationsModels, Following, Gallery, GalleryPurchasedVideosWatermarked, GalleryPurchases, GodConcept, GodConceptEarnings, GodConceptUsers, Godmodels, ImagesRejectedReasons, LatePayments, Likes, Media, MediaProcessing, MediaSaves, ModelReferralEarnings, ModelReminders, ModelRemindersActivity, ModelRemindersMissing, ModelRemindersPost, ModelTableTransfers, ModelsPaymentData, ModelsPayments, ModelsReferrals, ModelsSelling, ModelsSignatures, ModelsTelegramNotifications, MostRecentNotes, MultipleVideoProcessing, NotificationsModels, NotificationsUsers, PaymentException, Reels, ReferralsHiddenModels, ReferralsSettings, SingleVideoProcessing, Stories, StoriesPurchases, Streaming, StreamingPurchases, SubRenewalClicks, TestSubscribtions, TinderLikes, Tips, TrackDeletions, TrackingEmailsPurchases, TrackingRecommended, TrackingSubClicks, UserMessages, UsersCookiesTracking, VideoProcessing, Visited, W8FormColour, W8Tracking, WarningEmails, WarningsHistory, WatermarkVideos, WeMissYouReminders } = modelsClass;
           
      Models.hasMany(AdminSideModelCheckboxes, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(AdminSideSelectBoxes, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(AdminStatistics, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(AdminStatisticsNotes, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Ads, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(AdsPurchases, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(BlockedChats, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ChristmasContent, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(CronModelEarningsNew, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Directa24Request, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Discount, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(DiscountsGivenHistory, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(EmailNotificationsModels, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Following, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Gallery, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GalleryPurchasedVideosWatermarked, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GalleryPurchases, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GodConcept, {
        foreignKey: {
          name: 'god_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GodConcept, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GodConceptEarnings, {
        foreignKey: {
          name: 'god_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GodConceptEarnings, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(GodConceptUsers, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Godmodels, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ImagesRejectedReasons, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(LatePayments, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Likes, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Media, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(MediaProcessing, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(MediaSaves, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelReferralEarnings, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelReminders, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelRemindersActivity, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelRemindersMissing, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelRemindersPost, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelTableTransfers, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsPaymentData, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsPayments, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsReferrals, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsReferrals, {
        foreignKey: {
          name: 'ref_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsSelling, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsSignatures, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ModelsTelegramNotifications, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(MostRecentNotes, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(MultipleVideoProcessing, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(NotificationsModels, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(NotificationsUsers, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(PaymentException, {
        foreignKey: {
          name: 'model',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Reels, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ReferralsHiddenModels, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(ReferralsSettings, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(SingleVideoProcessing, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Stories, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(StoriesPurchases, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Streaming, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(StreamingPurchases, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(SubRenewalClicks, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(TestSubscribtions, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(TinderLikes, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Tips, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(TrackDeletions, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(TrackingEmailsPurchases, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(TrackingRecommended, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(TrackingSubClicks, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(UserMessages, {
        foreignKey: {
          name: 'model_msg_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(UsersCookiesTracking, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(VideoProcessing, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(Visited, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(W8FormColour, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(W8Tracking, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(WarningEmails, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(WarningsHistory, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(WatermarkVideos, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
     
      Models.hasMany(WeMissYouReminders, {
        foreignKey: {
          name: 'model_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Models;
};