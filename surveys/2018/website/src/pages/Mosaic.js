import React from 'react'
import '../stylesheets/screen.scss'

const images = [
    'awards_highest_interest.png',
    'awards_highest_satisfaction.png',
    'awards_highest_usage.png',
    'awards_highest-interest.png',
    'awards_highest-satisfaction.png',
    'awards_most_mentioned.png',
    'awards_most-dominant.png',
    'awards_most-improved.png',
    'awards_most-mentioned.png',
    'awards_most-used.png',
    'awards_prediction-award.png',
    'awards_prediction.png',
    'awards_special-award.png',
    'awards_special.png',
    'back-end-frameworks_conclusion_quadrants.png',
    'back-end-frameworks_express_dislikes.png',
    'back-end-frameworks_express_likes.png',
    'back-end-frameworks_express_results-over-time.png',
    'back-end-frameworks_express_tool-pairing.png',
    'back-end-frameworks_express_tool-usage-by-country.png',
    'back-end-frameworks_feathers_dislikes.png',
    'back-end-frameworks_feathers_likes.png',
    'back-end-frameworks_feathers_results-over-time.png',
    'back-end-frameworks_feathers_tool-pairing.png',
    'back-end-frameworks_feathers_tool-usage-by-country.png',
    'back-end-frameworks_koa_dislikes.png',
    'back-end-frameworks_koa_likes.png',
    'back-end-frameworks_koa_results-over-time.png',
    'back-end-frameworks_koa_tool-pairing.png',
    'back-end-frameworks_koa_tool-usage-by-country.png',
    'back-end-frameworks_meteor_dislikes.png',
    'back-end-frameworks_meteor_likes.png',
    'back-end-frameworks_meteor_results-over-time.png',
    'back-end-frameworks_meteor_tool-pairing.png',
    'back-end-frameworks_meteor_tool-usage-by-country.png',
    'back-end-frameworks_nextjs_dislikes.png',
    'back-end-frameworks_nextjs_likes.png',
    // 'back-end-frameworks_nextjs_results-over-time.png',
    'back-end-frameworks_nextjs_tool-pairing.png',
    'back-end-frameworks_nextjs_tool-usage-by-country.png',
    'back-end-frameworks_other-libraries_other-tools.png',
    'back-end-frameworks_overview_happiness.png',
    'back-end-frameworks_overview_overview.png',
    'back-end-frameworks_overview_tools-company-size.png',
    'back-end-frameworks_overview_tools-salary-range.png',
    'back-end-frameworks_overview_tools-years-of-experience.png',
    'back-end-frameworks_sails_dislikes.png',
    'back-end-frameworks_sails_likes.png',
    'back-end-frameworks_sails_results-over-time.png',
    'back-end-frameworks_sails_tool-pairing.png',
    'back-end-frameworks_sails_tool-usage-by-country.png',
    // 'conclusion_quadrants.png',
    'connections_connections.png',
    'data-layer_apollo_dislikes.png',
    'data-layer_apollo_likes.png',
    'data-layer_apollo_results-over-time.png',
    'data-layer_apollo_tool-pairing.png',
    'data-layer_apollo_tool-usage-by-country.png',
    'data-layer_conclusion_quadrants.png',
    'data-layer_graphql_dislikes.png',
    'data-layer_graphql_likes.png',
    'data-layer_graphql_results-over-time.png',
    'data-layer_graphql_tool-pairing.png',
    'data-layer_graphql_tool-usage-by-country.png',
    'data-layer_mobx_dislikes.png',
    'data-layer_mobx_likes.png',
    'data-layer_mobx_results-over-time.png',
    'data-layer_mobx_tool-pairing.png',
    'data-layer_mobx_tool-usage-by-country.png',
    'data-layer_other-libraries_other-tools.png',
    'data-layer_overview_happiness.png',
    'data-layer_overview_overview.png',
    'data-layer_overview_tools-company-size.png',
    'data-layer_overview_tools-salary-range.png',
    'data-layer_overview_tools-years-of-experience.png',
    'data-layer_redux_dislikes.png',
    'data-layer_redux_likes.png',
    'data-layer_redux_results-over-time.png',
    'data-layer_redux_tool-pairing.png',
    'data-layer_redux_tool-usage-by-country.png',
    'data-layer_relay_dislikes.png',
    'data-layer_relay_likes.png',
    'data-layer_relay_results-over-time.png',
    'data-layer_relay_tool-pairing.png',
    'data-layer_relay_tool-usage-by-country.png',
    'demographics_company-size.png',
    'demographics_gender-breakdown.png',
    'demographics_participation-by-country.png',
    'demographics_salaries.png',
    'demographics_salary-per-country.png',
    'demographics_years-of-experience.png',
    'front-end-frameworks_angular_dislikes.png',
    'front-end-frameworks_angular_likes.png',
    'front-end-frameworks_angular_results-over-time.png',
    'front-end-frameworks_angular_tool-pairing.png',
    'front-end-frameworks_angular_tool-usage-by-country.png',
    'front-end-frameworks_conclusion_quadrants.png',
    'front-end-frameworks_ember_dislikes.png',
    'front-end-frameworks_ember_likes.png',
    'front-end-frameworks_ember_results-over-time.png',
    'front-end-frameworks_ember_tool-pairing.png',
    'front-end-frameworks_ember_tool-usage-by-country.png',
    'front-end-frameworks_other-libraries_other-tools.png',
    'front-end-frameworks_overview_happiness.png',
    'front-end-frameworks_overview_overview.png',
    'front-end-frameworks_overview_tools-company-size.png',
    'front-end-frameworks_overview_tools-salary-range.png',
    'front-end-frameworks_overview_tools-years-of-experience.png',
    'front-end-frameworks_polymer_dislikes.png',
    'front-end-frameworks_polymer_likes.png',
    'front-end-frameworks_polymer_results-over-time.png',
    'front-end-frameworks_polymer_tool-pairing.png',
    'front-end-frameworks_polymer_tool-usage-by-country.png',
    'front-end-frameworks_preact_dislikes.png',
    'front-end-frameworks_preact_likes.png',
    // 'front-end-frameworks_preact_results-over-time.png',
    'front-end-frameworks_preact_tool-pairing.png',
    'front-end-frameworks_preact_tool-usage-by-country.png',
    'front-end-frameworks_react_dislikes.png',
    'front-end-frameworks_react_likes.png',
    'front-end-frameworks_react_results-over-time.png',
    'front-end-frameworks_react_tool-pairing.png',
    'front-end-frameworks_react_tool-usage-by-country.png',
    'front-end-frameworks_vuejs_dislikes.png',
    'front-end-frameworks_vuejs_likes.png',
    'front-end-frameworks_vuejs_results-over-time.png',
    'front-end-frameworks_vuejs_tool-pairing.png',
    'front-end-frameworks_vuejs_tool-usage-by-country.png',
    'javascript-flavors_clojurescript_dislikes.png',
    'javascript-flavors_clojurescript_likes.png',
    'javascript-flavors_clojurescript_results-over-time.png',
    'javascript-flavors_clojurescript_tool-pairing.png',
    'javascript-flavors_clojurescript_tool-usage-by-country.png',
    'javascript-flavors_conclusion_quadrants.png',
    'javascript-flavors_elm_dislikes.png',
    'javascript-flavors_elm_likes.png',
    'javascript-flavors_elm_results-over-time.png',
    'javascript-flavors_elm_tool-pairing.png',
    'javascript-flavors_elm_tool-usage-by-country.png',
    'javascript-flavors_es6_dislikes.png',
    'javascript-flavors_es6_likes.png',
    'javascript-flavors_es6_results-over-time.png',
    'javascript-flavors_es6_tool-pairing.png',
    'javascript-flavors_es6_tool-usage-by-country.png',
    'javascript-flavors_flow_dislikes.png',
    'javascript-flavors_flow_likes.png',
    'javascript-flavors_flow_results-over-time.png',
    'javascript-flavors_flow_tool-pairing.png',
    'javascript-flavors_flow_tool-usage-by-country.png',
    'javascript-flavors_other-libraries_other-tools.png',
    'javascript-flavors_overview_happiness.png',
    'javascript-flavors_overview_overview.png',
    'javascript-flavors_overview_tools-company-size.png',
    'javascript-flavors_overview_tools-salary-range.png',
    'javascript-flavors_overview_tools-years-of-experience.png',
    'javascript-flavors_reason_dislikes.png',
    'javascript-flavors_reason_likes.png',
    'javascript-flavors_reason_results-over-time.png',
    'javascript-flavors_reason_tool-pairing.png',
    'javascript-flavors_reason_tool-usage-by-country.png',
    'javascript-flavors_typescript_dislikes.png',
    'javascript-flavors_typescript_likes.png',
    'javascript-flavors_typescript_results-over-time.png',
    'javascript-flavors_typescript_tool-pairing.png',
    'javascript-flavors_typescript_tool-usage-by-country.png',
    'mobile-and-desktop_conclusion_quadrants.png',
    'mobile-and-desktop_electron_dislikes.png',
    'mobile-and-desktop_electron_likes.png',
    'mobile-and-desktop_electron_results-over-time.png',
    'mobile-and-desktop_electron_tool-pairing.png',
    'mobile-and-desktop_electron_tool-usage-by-country.png',
    'mobile-and-desktop_ionic_dislikes.png',
    'mobile-and-desktop_ionic_likes.png',
    'mobile-and-desktop_ionic_results-over-time.png',
    'mobile-and-desktop_ionic_tool-pairing.png',
    'mobile-and-desktop_ionic_tool-usage-by-country.png',
    'mobile-and-desktop_native-apps_dislikes.png',
    'mobile-and-desktop_native-apps_likes.png',
    'mobile-and-desktop_native-apps_results-over-time.png',
    'mobile-and-desktop_native-apps_tool-pairing.png',
    'mobile-and-desktop_native-apps_tool-usage-by-country.png',
    'mobile-and-desktop_nativescript_dislikes.png',
    'mobile-and-desktop_nativescript_likes.png',
    'mobile-and-desktop_nativescript_results-over-time.png',
    'mobile-and-desktop_nativescript_tool-pairing.png',
    'mobile-and-desktop_nativescript_tool-usage-by-country.png',
    'mobile-and-desktop_other-libraries_other-tools.png',
    'mobile-and-desktop_overview_happiness.png',
    'mobile-and-desktop_overview_overview.png',
    'mobile-and-desktop_overview_tools-company-size.png',
    'mobile-and-desktop_overview_tools-salary-range.png',
    'mobile-and-desktop_overview_tools-years-of-experience.png',
    'mobile-and-desktop_phonegap-cordova_dislikes.png',
    'mobile-and-desktop_phonegap-cordova_likes.png',
    'mobile-and-desktop_phonegap-cordova_results-over-time.png',
    'mobile-and-desktop_phonegap-cordova_tool-pairing.png',
    'mobile-and-desktop_phonegap-cordova_tool-usage-by-country.png',
    'mobile-and-desktop_react-native_dislikes.png',
    'mobile-and-desktop_react-native_likes.png',
    'mobile-and-desktop_react-native_results-over-time.png',
    'mobile-and-desktop_react-native_tool-pairing.png',
    'mobile-and-desktop_react-native_tool-usage-by-country.png',
    'opinions_opinion-building_js_apps_overly_complex.png',
    'opinions_opinion-enjoy_building_js_apps.png',
    'opinions_opinion-js_ecosystem_changing_to_fast.png',
    'opinions_opinion-js_moving_in_right_direction.png',
    'opinions_opinion-js_over_used_online.png',
    'opinions_opinion-survey_too_long.png',
    'opinions_opinion-would_like_js_to_be_main_lang.png',
    'other-tools_browser_apis.png',
    'other-tools_build_tools.png',
    'other-tools_other_languages.png',
    'other-tools_text_editors.png',
    'other-tools_utility_libraries.png',
    'testing_ava_dislikes.png',
    'testing_ava_likes.png',
    'testing_ava_results-over-time.png',
    'testing_ava_tool-pairing.png',
    'testing_ava_tool-usage-by-country.png',
    'testing_conclusion_quadrants.png',
    'testing_enzyme_dislikes.png',
    'testing_enzyme_likes.png',
    'testing_enzyme_results-over-time.png',
    'testing_enzyme_tool-pairing.png',
    'testing_enzyme_tool-usage-by-country.png',
    'testing_jasmine_dislikes.png',
    'testing_jasmine_likes.png',
    'testing_jasmine_results-over-time.png',
    'testing_jasmine_tool-pairing.png',
    'testing_jasmine_tool-usage-by-country.png',
    'testing_jest_dislikes.png',
    'testing_jest_likes.png',
    'testing_jest_results-over-time.png',
    'testing_jest_tool-pairing.png',
    'testing_jest_tool-usage-by-country.png',
    'testing_karma_dislikes.png',
    'testing_karma_likes.png',
    // 'testing_karma_results-over-time.png',
    'testing_karma_tool-pairing.png',
    'testing_karma_tool-usage-by-country.png',
    'testing_mocha_dislikes.png',
    'testing_mocha_likes.png',
    'testing_mocha_results-over-time.png',
    'testing_mocha_tool-pairing.png',
    'testing_mocha_tool-usage-by-country.png',
    'testing_other-libraries_other-tools.png',
    'testing_overview_happiness.png',
    'testing_overview_overview.png',
    'testing_overview_tools-company-size.png',
    'testing_overview_tools-salary-range.png',
    'testing_overview_tools-years-of-experience.png',
    'testing_storybook_dislikes.png',
    'testing_storybook_likes.png',
    'testing_storybook_results-over-time.png',
    'testing_storybook_tool-pairing.png',
    'testing_storybook_tool-usage-by-country.png'
]

const Mosaic = () => (
    <div className="mosaic">
        {images.map(image => (
            <div className="mosaic__image">
                <img src={`/images/captures/${image}`} alt="capture" />
            </div>
        ))}
    </div>
)

export default Mosaic
