<?php
/**
 * implementation of mailfish_admin_settings_form()
 */
function mailfish_admin_settings_form(){
    $form = array();
    $form['mailfish_types'] = array(
        '#title' => t('the content types to enable mailfish subscriptions'),
        '#description' => t('on the specified node types, a mailfish subscription option will be available and can be enabled while that node is being edited'),
        '#type' => 'checkboxes',
        '#options' => node_type_get_names(),
        '#default_value' => variable_get('mailfish_types', array()),
    );
    return system_settings_form($form);
}
?>