# scratch hello world

```sql test_query
select ULIDStringToDateTime(__row_id) as t, email from email_signup order by t desc
```

{2 + 2}

{test_query[0].col}

<DataTable data="{test_query}" search="true">
    <!-- <Column id="date" /> -->
    <!-- <Column id="country" title="Country Name" /> -->
    <!-- <Column id="value_usd" /> -->
</DataTable>