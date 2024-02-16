import uniInfo from "/assets/images/navbar/notification/uni_info_icon.png";
import uniSuccess from "/assets/images/navbar/notification/uni_success_icon.png";
import uniWarn from "/assets/images/navbar/notification/uni_warn_icon.png";

import careerInfo from "/assets/images/navbar/notification/career_info_icon.png";
import careerSuccess from "/assets/images/navbar/notification/career_success_icon.png";
import careerWarn from "/assets/images/navbar/notification/career_warn_icon.png";

import networkInfo from "/assets/images/navbar/notification/network_info_icon.png";
import networkSuccess from "/assets/images/navbar/notification/network_success_icon.png";
import networkWarn from "/assets/images/navbar/notification/network_warn_icon.png";

import aptitudeInfo from "/assets/images/navbar/notification/aptitude_info_icon.png";
import aptitudeSuccess from "/assets/images/navbar/notification/aptitude_success_icon.png";
import aptitudeWarn from "/assets/images/navbar/notification/aptitude_warn_icon.png";



const notificationIcons = {
    university: {
        info: uniInfo,
        success: uniSuccess,
        warning: uniWarn,
    },
    career: {
        info: careerInfo,
        success: careerSuccess,
        warning: careerWarn,
    },
    network: {
        info: networkInfo,
        success: networkSuccess,
        warning: networkWarn,
    },
    aptitude: {
        info: aptitudeInfo,
        success: aptitudeSuccess,
        warning: aptitudeWarn,
    },
}

export default notificationIcons;