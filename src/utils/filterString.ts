// import { Record, FieldSet } from "airtable";

const filterString = (ids: any) => {
  const string_arr = ids.map((id: any) => `RECORD_ID() = '${id}'`);
  return string_arr.join(', ');
};

export default filterString;