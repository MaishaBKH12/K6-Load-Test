import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '5m30s', target: 500 },
    { duration: '3m30s', target: 400 },
    { duration: '1m20s', target: 300 },
  ],
};

export default function () {
  
   const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQzNDg0YzBlLTNmM2EtNGJhMC05NTQzLThmNDdiMmZhNWUyYyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImJyb2tlckBjYWJvb2RsZS5jb20iLCJmdWxsTmFtZSI6IkJyb2tlciBVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkJyb2tlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJVc2VyIiwiaXBBZGRyZXNzIjoiNTIuOC4xOS4xNjkiLCJpbWFnZV91cmwiOiJodHRwczovL2NhYm9vZGxlLXByb2QuczMuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbS9Vc2Vycy80MzQ4NGMwZS0zZjNhLTRiYTAtOTU0My04ZjQ3YjJmYTVlMmMvUHJvZmlsZUltYWdlcy9lYjMyMTYzZC0xN2YwLTQxNjMtOWUyOC03ZjdkNmIzYWExYWEuanBlZyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiIiwiZXhwIjoxNzE3NDcxNTk5fQ.46eKpoeJUTCQgBqC5hqZXyjVT_scL_sOb8JqtK8NfKM';
   
   const req1 = {
    method: 'GET',
    url: 'https://api.caboodleservices.com/api/v1/tradespends/bce68238-b8d4-4270-99f8-b3640298d541',
    params: {
        headers:  {
             'Authorization': `Bearer ${token}`,
             'BrandID': 'b0347870-6b88-426e-81a9-1ae89f29b400'
            }
      }
  };
  const req2 = {
    method: 'GET',
    url: 'https://api.caboodleservices.com/api/v1/distributors/122ba709-31d9-4522-85cc-cb3ba811b7c9/retailers?pageSize=10&currentPage=1&sortingOrder=ASC',
	
    params: {
        headers:  {
             'Authorization': `Bearer ${token}`,
             'BrandID': 'b0347870-6b88-426e-81a9-1ae89f29b400'
            }
      }

  };
  
  const req3 = {
    method: 'GET',
    url: 'https://api.caboodleservices.com/api/v1/marketoverviews?sortingOrder=ASC&pageSize=10&currentPage=1&sortKey=RegionName',
    params: {
        headers:  {
             'Authorization': `Bearer ${token}`
            }
      }
  };
  
    const req4 = {
    method: 'GET',
    url: 'https://api.caboodleservices.com/api/v1/brokers/promotional-management-events?pageSize=10&currentPage=1',
    params: {
        headers:  { 'Authorization': `Bearer ${token}`}
      }
  };
  
  const req5 = {
    method: 'GET',
    url: 'https://api.caboodleservices.com/api/v1/banners/skus/for-promo?startDate=1/1/2024&categoryIDs=e1626a8c-65d9-45f6-9a86-cbdbe4c852ba&categoryIDs=b91e1c3f-9fb9-4c2d-933d-110c8f2a73f4&categoryIDs=3f2393eb-b79f-483c-b4e3-83794744a1eb&retailerIDs=13c1cf84-bdd8-4328-8d5e-dccb185241e8&retailerIDs=292d79a5-8d96-43b4-b1ec-be5a6bc6efaa&retailerIDs=935baba3-2933-4eb0-baf9-c1d04c4bdc67&retailerIDs=11754472-0e1d-4874-a3c9-96a9ada3b4e4&retailerIDs=3fa9625a-ca33-4fce-8bac-0d9861a961ca&retailerIDs=97c2a755-de6f-4170-874a-7f6db1fa4160&retailerIDs=1d19ce81-a9e1-4d8a-938f-2387e59251d4&retailerIDs=15f27460-05c3-490e-8330-7d668d5b799c&retailerIDs=d2661ac0-f570-4ed4-8aa2-752cb223901d&retailerIDs=463c4ce7-e089-445e-99ef-fc6dc3d1c872&retailerIDs=18eff319-2935-49cb-95fa-5ad36aecd0a6&retailerIDs=544b57df-6254-4676-8fea-a3789cb8bb89&retailerIDs=fb7e9ccf-8b16-46e0-8064-47ea9b5cb1f3&statuses=1&statuses=2&statuses=3&statuses=4&statuses=5&statuses=6&statuses=7',
    params: {
        headers:  {
             'Authorization': `Bearer ${token}`,
             'BrandID': 'b0347870-6b88-426e-81a9-1ae89f29b400'
            }
      }
  };

   const responses = http.batch([req1,req2,req3,req4,req5]);
   
  check(responses[0], {
    'main page status was 200': (res) => res.status === 200,
  });
}
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }
  