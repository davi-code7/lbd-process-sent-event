const OrchyBase = require("orchy-base-code7");

("use strict");

module.exports.processSentEvent = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  const orchybase = new OrchyBase.default();

  await orchybase.createQueueContact({
    id_flow: message.id_flow,
    api_key: message.api_key,
    id_contact_data: message.id_contact_data,
    id_item: message.id_item,
    event_type: message.event_type,
    data_type: message.data_type,
    contact_data: message.contact_data,
    message: message.message,
    schedule: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  });
};
