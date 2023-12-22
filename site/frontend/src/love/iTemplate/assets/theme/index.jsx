/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Kit 2 React base styles
import colors from "src/love/iTemplate/assets/theme/base/colors";
import breakpoints from "src/love/iTemplate/assets/theme/base/breakpoints";
import typography from "src/love/iTemplate/assets/theme/base/typography";
import boxShadows from "src/love/iTemplate/assets/theme/base/boxShadows";
import borders from "src/love/iTemplate/assets/theme/base/borders";
import globals from "src/love/iTemplate/assets/theme/base/globals";

// Material Kit 2 React helper functions
import boxShadow from "src/love/iTemplate/assets/theme/functions/boxShadow";
import hexToRgb from "src/love/iTemplate/assets/theme/functions/hexToRgb";
import linearGradient from "src/love/iTemplate/assets/theme/functions/linearGradient";
import pxToRem from "src/love/iTemplate/assets/theme/functions/pxToRem";
import rgba from "src/love/iTemplate/assets/theme/functions/rgba";

// Material Kit 2 React components base styles for @mui material components
import list from "src/love/iTemplate/assets/theme/components/list";
import listItem from "src/love/iTemplate/assets/theme/components/list/listItem";
import listItemText from "src/love/iTemplate/assets/theme/components/list/listItemText";
import card from "src/love/iTemplate/assets/theme/components/card";
import cardMedia from "src/love/iTemplate/assets/theme/components/card/cardMedia";
import cardContent from "src/love/iTemplate/assets/theme/components/card/cardContent";
import button from "src/love/iTemplate/assets/theme/components/button";
import iconButton from "src/love/iTemplate/assets/theme/components/iconButton";
import input from "src/love/iTemplate/assets/theme/components/form/input";
import inputLabel from "src/love/iTemplate/assets/theme/components/form/inputLabel";
import inputOutlined from "src/love/iTemplate/assets/theme/components/form/inputOutlined";
import textField from "src/love/iTemplate/assets/theme/components/form/textField";
import menu from "src/love/iTemplate/assets/theme/components/menu";
import menuItem from "src/love/iTemplate/assets/theme/components/menu/menuItem";
import switchButton from "src/love/iTemplate/assets/theme/components/form/switchButton";
import divider from "src/love/iTemplate/assets/theme/components/divider";
import tableContainer from "src/love/iTemplate/assets/theme/components/table/tableContainer";
import tableHead from "src/love/iTemplate/assets/theme/components/table/tableHead";
import tableCell from "src/love/iTemplate/assets/theme/components/table/tableCell";
import linearProgress from "src/love/iTemplate/assets/theme/components/linearProgress";
import breadcrumbs from "src/love/iTemplate/assets/theme/components/breadcrumbs";
import slider from "src/love/iTemplate/assets/theme/components/slider";
import avatar from "src/love/iTemplate/assets/theme/components/avatar";
import tooltip from "src/love/iTemplate/assets/theme/components/tooltip";
import appBar from "src/love/iTemplate/assets/theme/components/appBar";
import tabs from "src/love/iTemplate/assets/theme/components/tabs";
import tab from "src/love/iTemplate/assets/theme/components/tabs/tab";
import stepper from "src/love/iTemplate/assets/theme/components/stepper";
import step from "src/love/iTemplate/assets/theme/components/stepper/step";
import stepConnector from "src/love/iTemplate/assets/theme/components/stepper/stepConnector";
import stepLabel from "src/love/iTemplate/assets/theme/components/stepper/stepLabel";
import stepIcon from "src/love/iTemplate/assets/theme/components/stepper/stepIcon";
import select from "src/love/iTemplate/assets/theme/components/form/select";
import formControlLabel from "src/love/iTemplate/assets/theme/components/form/formControlLabel";
import formLabel from "src/love/iTemplate/assets/theme/components/form/formLabel";
import checkbox from "src/love/iTemplate/assets/theme/components/form/checkbox";
import radio from "src/love/iTemplate/assets/theme/components/form/radio";
import autocomplete from "src/love/iTemplate/assets/theme/components/form/autocomplete";
import flatpickr from "src/love/iTemplate/assets/theme/components/flatpickr";
import container from "src/love/iTemplate/assets/theme/components/container";
import popover from "src/love/iTemplate/assets/theme/components/popover";
import buttonBase from "src/love/iTemplate/assets/theme/components/buttonBase";
import icon from "src/love/iTemplate/assets/theme/components/icon";
import svgIcon from "src/love/iTemplate/assets/theme/components/svgIcon";
import link from "src/love/iTemplate/assets/theme/components/link";
import dialog from "src/love/iTemplate/assets/theme/components/dialog";
import dialogTitle from "src/love/iTemplate/assets/theme/components/dialog/dialogTitle";
import dialogContent from "src/love/iTemplate/assets/theme/components/dialog/dialogContent";
import dialogContentText from "src/love/iTemplate/assets/theme/components/dialog/dialogContentText";
import dialogActions from "src/love/iTemplate/assets/theme/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
