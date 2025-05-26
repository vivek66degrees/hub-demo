function external_table(table, dataset, gcs_uri) {
    return `
        CREATE OR REPLACE EXTERNAL TABLE ${dataset}.${table}
        OPTIONS (
        format = "PARQUET",
        uris = ["${gcs_uri}/*.parquet"]
        )
      `;

  }
module.exports = { external_table };