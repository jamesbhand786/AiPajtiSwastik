import React from "react";

import { Box, Icon } from "@chakra-ui/react";
import { MdBarChart, MdCurrencyBitcoin, MdOutlineAudiotrack, MdOutlineManageSearch, MdPerson } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoDocument, IoDocumentOutline, IoImageOutline, IoPlay } from "react-icons/io5";
import { CopyIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { IoMdLogOut } from "react-icons/io";
import PersonalFeed from "layouts/personalfeed";
import AiChatBot from "layouts/aichatbot";
import AiDocumentReading from "layouts/aidocumentreading";
import FaqsnHelp from "layouts/faqs";
import PricingPage from "layouts/pricing";
import ImgGeneration from "layouts/imggeneration";
import UserProfile from "layouts/userprofile";
import AiVideoGeneration from "layouts/aivideogeneration";
import CustomNavlinks from "components/sidebar/components/customnavlinks";
import AdminHome from "layouts/adminhome";
import ProfileMain from "views/admin/profile";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import DocumentCategories from "layouts/documentcategories";
import { DocumentIcon } from "components/icons/Icons";
import { FcAudioFile, FcDocument } from "react-icons/fc";
import AiAudioTransc from "layouts/aiaudiotranscription";
import DataSets from "layouts/datasets";
import Settings from "views/admin/dataTables";
import { BsMic, BsVoicemail } from "react-icons/bs";
import { CgVoicemailR } from "react-icons/cg";
import { RiVoiceRecognitionFill } from "react-icons/ri";
import SpeechTrans from "layouts/speechtrans";
import Voices from "layouts/voices";
import Dubbling from "layouts/dubbling";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "/default",
    type: "admin",
    icon: (
      <Icon as={GoHome} width="16px" height="16px" mt="1.5" color="inherit" />
    ),
    component: AdminHome,
  },

  {
    name: "Managing Modal",
    layout: "/admin",
    path: "/mngmodal",
    type: "admin",
    icon: (
      <Icon as={MdOutlineManageSearch } width="20px" height="20px" mt="1" color="inherit" />
    ),
    component: Settings,
  },
  

  {
    name: "Personal feed",
    layout: "/admin",
    path: "/pfeed",
    type: "account",
    icon: (
      <Icon as={FaRegUser } width="14px" height="14px" mt="1" color="inherit" />
    ),
    component: PersonalFeed,
  },

  {
    name: "Datasets",
    layout: "/admin",
    path: "/datasets",
    type: "account",
    icon: (
      <Icon as={IoDocument } width="14px" height="14px" mt="1" color="inherit" />
    ),
    component: DataSets,
  },
  {
    name: "Dubbling",
    layout: "/admin",
    path: "/dubbling",
    type: "account",
    icon: (
      <Icon as={CopyIcon } width="14px" height="14px" mt="1" color="inherit" />
    ),
    component: Dubbling,
  },
  // {
  //   name: "Voiceover Generation",
  //   layout: "/admin",
  //   path: "/voiceover",
  //   type: "account",
  //   icon: (
  //     <Icon as={BsVoicemail } width="14px" height="14px" mt="1" color="inherit" />
  //   ),
  //   component: DataSets,
  // },
  {
    name: "Voices",
    layout: "/admin",
    path: "/voices",
    type: "account",
    icon: (
      <Icon as={RiVoiceRecognitionFill } width="14px" height="14px" mt="1" color="inherit" />
    ),
    component: Voices,
  },
  
  // {
  //   name: "Document Categories",
  //   layout: "/admin",
  //   path: "/xxx",
  //   type: "admin",
  //   icon: (
  //     <Icon as={IoDocumentOutline} width="14px" height="14px" mt="1" color="inherit" />
  //   ),
  //   component: DocumentCategories,
  // },
  // {
  //   name: "Document Categories",
  //   layout: "/admin",
  //   path: "/doccategory",
  //   type: "admin",
  //   icon: (
  //     <Icon as={IoDocumentOutline} width="14px" height="14px" mt="1" color="inherit" />
  //   ),
  //   component: ProfileMain,
  // },
  // {
  //   name: "Image Generation",
  //   layout: "/admin",
  //   path: "/abvc",
  //   icon: (
  //     <Icon
  //       as={IoImageOutline}
  //       width="16px"
  //       height="16px"
  //       mt="1"
  //       color="inherit"
  //     />
  //   ),
  //   component: ImgGeneration,
  // },
  // {
  //   name: "AI Chat Bot",
  //   layout: "/admin",
  //   path: "/yiyy",
  //   icon: (
  //     <Icon
  //       as={IoChatbubbleEllipsesOutline}
  //       width="16px"
  //       height="16px"
  //       mt="1"
  //       color="inherit"
  //     />
  //   ),
  //   component: AiChatBot,
  // },
  // {
  //   name: "AI Document Reading",
  //   layout: "/admin",
  //   path: "/lklk",
  //   icon: (
  //     <Icon
  //       as={IoChatbubbleEllipsesOutline}
  //       width="16px"
  //       height="16px"
  //       mt="1"
  //       color="inherit"
  //     />
  //   ),
  //   component: AiDocumentReading,
  // },
  // {
  //   name: "AI Video Generation",
  //   layout: "/admin",
  //   path: "/aivideogeneration",
  //   icon: (
  //     <Icon
  //       as={IoChatbubbleEllipsesOutline}
  //       width="16px"
  //       height="16px"
  //       mt="1"
  //       color="inherit"
  //     />
  //   ),
  //   component: AiVideoGeneration,
  // },
  // {
  //   name: "Pricing",
  //   layout: "/admin",
  //   path: "/pricing",
  //   icon: (
  //     <Icon
  //       as={MdCurrencyBitcoin}
  //       width="16px"
  //       height="16px"
  //       mt="1"
  //       color="inherit"
  //     />
  //   ),
  //   component: PricingPage,
  // },
  // {
  //   name: "FAQ & Help",
  //   layout: "/admin",
  //   path: "/tu",
  //   icon: (
  //     <Icon
  //       as={QuestionOutlineIcon}
  //       width="16px"
  //       height="16px"
  //       color="inherit"
  //     />
  //   ),
  //   component: FaqsnHelp,
  // },
  {
    name: "Image Generation",
    layout: "/admin",
    path: "/image-generation",
    type: "usertools",
    icon: (
      <Icon
        as={IoImageOutline}
        width="16px"
        height="16px"
        mt="1.5"
        color="inherit"
      />
    ),
    component: ImgGeneration,
  },
  {
    name: "AI Chat Bot",
    layout: "/admin",
    path: "/ai-chat-bot",
    type: "usertools",
    icon: (
      <Icon
        as={IoChatbubbleEllipsesOutline}
        width="16px"
        height="16px"
        mt="1.5"
        color="inherit"
      />
    ),
    component: AiChatBot,
  },
 
  {
    name: "Ai Audio Transcription",
    layout: "/admin",
    path: "/audio-transcription",
    type: "usertools",
    icon: (
      <Icon
        as={MdOutlineAudiotrack}
        width="16px"
        height="16px"
        mt="1.5"
        color="inherit"
      />
    ),
    component: AiAudioTransc,
  },
   {
    name: "AI Video Generation",
    layout: "/admin",
    path: "/aivideogeneration",
    type: "usertools",
    icon: (
      <Icon
        as={IoPlay}
        width="16px"
        height="16px"
        mt="1"
        color="inherit"
      />
    ),
    component: AiVideoGeneration,
  },
  {
    name: "AI Speech Generation",
    layout: "/admin",
    path: "/aispeechgeneration",
    type: "usertools",
    icon: (
      <Icon
        as={BsMic}
        width="16px"
        height="16px"
        mt="1"
        color="inherit"
      />
    ),
    component: SpeechTrans,
  },
  {
    name: "Pricing",
    layout: "/admin",
    path: "/pricing",
    type: "support",
    icon: (
      <Icon
        as={MdCurrencyBitcoin}
        width="16px"
        height="16px"
        mt="1.5"
        color="inherit"
      />
    ),
    component: PricingPage,
  },
  // {
  //   name: "FAQ & Help",
  //   layout: "/admin",
  //   path: "/faq-help",
  //   type: "support",
  //   icon: (
  //     <Icon
  //       as={QuestionOutlineIcon}
  //       width="15px"
  //       height="15px"
  //       color="inherit"
  //     />
  //   ),
  //   component: FaqsnHelp,
  // },
  {
    name: "Log Out",
    layout: "/auth",
    path: "/sign-in",
    type: "support",
    icon: (
      <Icon
        as={IoMdLogOut}
        width="16px"
        height="16px"
        mt="1.5"
        color="inherit"
      />
    ),
    component: SignInCentered,
  },
];

export default routes;
