/*
5.23-6.20 寻找潮配之旅
新增开卡脚本，一次性脚本



第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

————————————————
入口：[ 5.23-6.20 寻找潮配之旅]

请求太频繁会被黑ip
过10分钟再执行

cron:20 2 23-31,1-20 5,6 *
============Quantumultx===============
[task_local]
#5.23-6.20 寻找潮配之旅
20 2 23-31,1-20 5,6 * jd_opencardL156.js, tag=5.23-6.20 寻找潮配之旅, enabled=true

*/

const $ = new Env('5.23-6.20 寻找潮配之旅')
var _0xod9 = 'jsjiami.com.v6', _0xod9_ = ['‮_0xod9'],
    _0x3fdb = [_0xod9, 'w7F+wpE=', 'HRbDv8KPXA==', 'I8KfAMKMw4A=', 'wpbCt1nDkMOKHQ==', 'ZVfDkMKMwoTDmg==', 'XgDDucObw5jCuFjCsng=', 'DgEIw6c=', 'wrfCv8KHwqPCv8Ouw7Rzw5k=', 'B8KTGMKtwr8=', 'woTDh2bDsMKs', 'wpZhMQ==', 'w4vDvsKlVsOPJUzCpxkgMGc=', 'S2PCk8OwaA==', 'Rxwrw68f', 'Y8KnLzU=', 'V0bCswFX', 'Y8KmNjLCng==', 'VMKfPCUfNMKB', 'E8KhOMKKwrg=', 'w6xRKT7CgcODw5A=', 'ccKrBxQoMMKiBMOaw4fCq3x6X8K+', 'a8O2wpJwEg==', 'wrc6dnzCuw==', 'w7LCjMOOw6zDrzA=', 'TcKPAirCvQ==', 'eMKlIzbCu17DssOl', 'wpPDhX3Dow==', 'wrjDnEPDqsK6', 'WF7DqsK+wrw=', 'wpJMHV/Cgw==', 'IzLDisKQYUPDmw==', 'SHnDlcK/w63DvsKqw7PDlsKew7DDqk1cw6s=', 'SzzDucOdw60=', 'wqHCqMKWwrjCjcOuw74=', 'Ey4PWsOAw5gJ', 'bsOLwoNrHQ==', 'w5zDqcKnVcOcC0w=', 'S1xP', 'TT/DtcOAw7I=', 'w75tw5UJw60=', 'wq3Dg0vDo8KI', 'ZmLDpMKPwqk=', 'dMKnDzfCvQ==', 'wrUBe8O9DA==', 'Fi8M', 'wq/Dg8KGwrHDvU/DpWDCkmjCtMO+BwA=', 'wphOw6waecOZw6E=', 'w7RvCi3CuA==', 'USTDgyDDoFFHwqTDrA==', 'VCbDgy4=', 'QlnCswRMMcO3cWgNwpIT', 'w7TCncOjw6jDoSHCuEtB', 'woxGJ8OZ', 'worCt13Ds8OPGQ==', 'QFfCqwk=', 'D8KzOMOU', 'wpAdw7NWL1HDi8OMw6LDj8Ozw6cBwo0=', 'EiUHT8O+w6UGwoJSwozDnMKvZ0tvSw==', 'UhfDtMOcw43CqV7CpXPDqBfDkX5hSD8=', 'e8K6IQ==', 'ckDDkcKWwprDo8O8LcOUw5Njw4I=', 'YwPDrMKSTg==', 'w4XDpsKSWMOy', 'ESouXsO3', 'T8KUKzULDw==', 'bcOgwpFvFx8=', 'HiEfXg==', 'RwQow7Yiwqg=', 'SnzCtMOfVA==', 'UMKKAMKfdMOz', 'Lj3DmsKU', 'w7nCj8OQw6g=', 'HcK3IsORe114Ig==', 'w5jChsOXwqg=', 'AsKVGcK7wr/CvhLDrA==', 'w7hjwoTDm8O7wpRvNF8GHh8=', 'wplEw7g=', 'wqkDTA==', 'NMKsw7Y=', 'HcKeDsKhw6I=', 'CxfCiDQC', 'w6RiwrLDk8Ox', 'w654wpHDmg==', 'wqDDuMKqwqzDvA==', 'PMKYHcOPWw==', 'wp8LaVDDrA==', 'Y8Ouw4HDvT7CrQ==', 'wpBZw60GasOzw6HCjsKIcMK8UQ==', 'fcOkw5U=', 'Q31vw6VN', 'aEzDrQ==', 'w6pdJz7CmsO4', 'SBfDq8OZw6fCrw==', 'wpMYfXPDmg==', 'w4HCmMKyYMOj', 'GRYVw4/Cuw==', 'GAUPw7PCrcOw', 'a1PDr8KFw67DnMKcw4k=', 'esO3wpB1CSYIBMKiwrbCm8Ka', 'HzIZUMOKw5oKwpRPwonDqMK+', 'RsKQHcKAT8Oaw5bCq8KWNcOXAw==', 'cmHCrMOEUQ==', 'wrcqw4ZTHA==', 'Sk/Cj8Oudg==', 'AiZXJWfDs1ZNfsKKNsKFbMOewoU=', 'RsOsbA==', 'wq1EB1zCrQ==', 'G8KSHcK6wrnCuA==', 'woxIHV7Chw==', 'dnjDlMKzwrg=', 'BsO6wr10w4w=', 'LQXCuQ==', 'w43CocO3w50=', 'KsOLwrFmwrY/wp3CshTDucKnw6fDj8KoMXfCow==', 'w79XYDjClw==', 'wpt+JkrCgVHDvcKpw54ow7zCp1HDq3ZqFsOBLjDDthcpS1LCo8OfQXgdwpnCj2I=', 'ZcK8FAgTD8KXGMOgw6DCn1Vcbg==', 'TELCqxhQfMKrKmUDwoMawo9Nw5cJworDg8K5IifCuEEqccOOLcO/wpvCgA==', 'wpBUw5fCnsKufA==', 'VRw3w6oCwq8BwoDCkcKJwrNUwrNRwq/Cpg==', 'w5jCgMKqecOQ', 'T1PCuhgOJ8OobH8c', 'fU7CuRlU', 'w4tTwrrDgsOZ', 'd8KbMyYS', 'QMKRNhXCpQ==', 'wooUS8OgLsOMwq4JBMORwoPCnMKXworCjcKiJsKyw4AJw5IQw5EPWVjCucKnwoNtwq8Zw69lLcOSNhs1w4PCusOIwr1gOW0uw4bCqcONwrjChcKawoJqwrPCtTFOw6V0WQrCvcOHw4NYwpJR', 'AG4CKcKJIMKfVcKQwrg=', 'ZMK9JyrCkmLDtMO4Hg==', 'T8Oswow=', 'QcKSCMK/TA==', 'wrR+w4shR8O9w5vCqMKoVMKJCQ==', 'NS91JHI=', 'M0HCoFVT', 'flPDq8K9wrE=', '5rWY5Yut5beG57qT5p2L', 'ExAzZ8OS', 'VsO4w4vDsic=', '5qyPwrs85bWH6KK16Zm/5YiH772K6K2g6LyDAQHliLrpk5XlkbLlhLzmiY/ooorohYrmnbQx', 'ImIZK8KWLMKhaA==', 'agLDlcO8w6Q=', 'wrTDi2bDqcKgw4pMw43Dlw==', 'wrvCucKSwqTCn8K3wrQuw5BjCzjCoMO2fGXCp25DO20hF8OJUMKpfsKaNMOrMEhaUTFpwoFZeMKqdDR+woZfLCYhw4HDrMKoNcKWw7QMIMO2B8OSbwTCrWzDi17ClTBVHA==', 'w7kiDA==', 'cn/Cu8OiQA==', 'UFvDkcK9wpE=', 'DDBABnjDoX0=', 'wopIw4rCsMKR', 'woTDkGjDtsK8w5x8w6jDt8KT', 'F8K/NMKzwqs=', 'w5JzHDPCow==', 'wr/DoEzDkMK5', 'cMOwwpZcFwoK', 'wrnDhVPDusKN', 'FWIlNMKN', 'VBPDtcOJ', 'wr3CjcOLw6bDpy3CmAVkccKz6K2N5rCG5aWn6LeK77y96K+75qKe5pyZ576Q6LSo6YWF6Kys', 'wrl7Pk3Cig==', 'DiRAI3w=', 'wpUDXMODMg==', 'w7p0woLDkMOowq1r', 'b33DlMK4wpA=', 'WsKULCQGD8KG', 'w6bCqsOswoYx', 'w7t4wprDgMOswqs=', 'ZUDDvsKCw5TDnMKbw4TDjMKmw5U=', 'w4LDo8Kw', 'KcKMDMKfw4M=', 'UwUhw7IiwqIGwps=', 'w7rCh8OCw73DgC3CjlE=', '5YeZ5L+96IyU5b2eaA==', 'wqEFWFLDghDDusK5wpDDiRpGw4U1', 'w57DvsK+Q8OYJkjCuQ8=', 'wpEFXMO/M8KSw41PBsOOwqPCg8OJwoA=', 'LgjCtMKQw5UZ', 'AcOrwodCw5VUwrzCmS3Dg8KHw5/Dv8OBLA==', 'c8O/wr1wHxsEGcKOwqPCk8KUwpM+w6Q=', 'IxvDpsKYUA==', 'w6zDoVnCscKdwonCo0Ixw6c=', 'EiUKW8Odw6Uc', 'MsK2MsKZw4M=', 'd1PDpsKCw5Y=', 'w53DvMK7UMOJ', 'TVjCuw1bCcOi', 'wqknZ3jDgw==', 'DcK5w4vCllE=', 'CCUbU8OZw7QK', 'UsOJw5PDuCY=', 'Qy3DpcKhVg==', 'w6wiCB7CrMO1wqg=', 'MWrCqG9yw4PDuQ7CjkEZw5/DumnDswM2wroWwrPDgikAw5VCacOy', 'wopvw47CuMK/', 'HF1Nw7dCaSFGw61zDsKYLcOucSdww4s2GsKIwq1qFMOCKEB3FcOjw7/CghjCtnPDhkzCijwGL8OGw63DijUDDsKjPAVeVMK1Jg4ew6p6wrYEwp/DiEfCnMOhMsOGwqMYGsKFwqXDmsKNR1nDk0PDmsKhw77DoG9Zw45tw7IfXcKRwqQ5HcOvDhIHOghJwrBGw7TDvsOtXBJSw7PDqkFzwpMifGDDrwAXQ8KyJTHChmwhQAjCknvCgcK4IxHCj8K6w64/IlHDumHCij10wpXDt14jeizCn0bCpcOhNcKYw4kEwrzCtVDDgwB7w41YMxHDpRk6w4zDjcO4w6fChhYJw5rDhgvDlcO/ZsK0b8Kywr8wVX1+fcKfYWjDgcOYw7FTTAoXeRjCliXDuSEJXwo6', 'wrJZw5vCkcKif1PDj8OiLsOwHnQew7XDpQ==', 'wrktV0DCpQ==', 'DyBaJ2DDqA==', 'w7XCuMKoZsOM', 'wrVXw5fCmsK1', 'wqVOw6oDeQ==', 'cV7DjMKWwpo=', 'w5zDrcK/VcOe', 'wpIvQGfDvg==', 'QjfDrivDsA==', 'wqxMFMOowoQ=', 'CxXCgxAX', 'wqvDg8KX', 'wrp1AsO3woE=', 'wrxZw5LCkMKkbQ==', 'WxHDu8OJw7jCqHvCr3rDmy3DkXdUeQ==', 'RMKWHcKcUw==', '5rSL5Yuv5aad54Ck54qU77yI6K+F56uA5ZKG5Yan6K24', 'wrTCt8KPwqTDgMKtw79kw5p1DjbDqMKzL3HDuw==', 'w6DCm8K7YsOIw5TDrnvCoCY5c8OVfz9uw4/Dg8Oiw7jCmVjCuMKkIsKBY3pjwpwTw6rCoSN5PcKGVXtLwqnDqh3DgsOhIFItw67CiCPDscOxMsONw43CksKnJMOIwoDCgcKDw40mdVNmc8OdFVrDkMKGwoUVwoplRmgBw6DCmsKZBsOPw5DCpsOkw5nCo8OgLmY1woxNw7rCgDlrwrhjJhvDpGvDhMO6wr7Cp8OOEsKNZ04mVMOHJg==', 'w7fCgcONw6fDmiHCk0FAU8Kzw54=', 'wp7DicKYwpbDng==', 'w4jDt3zDkMKw', 'w4BCw6o7w6A=', 'GCbCpsKAw5M=', 'RsKQHcKMUsOzw5Y=', 'ASDChA4D', 'FQXCtcKQw5g=', 'U1xDw6Zb', 'aUbDucKYw4PDksKK', 'XR8xw4kJwqoVwofCm8KHwqkUwqsC', 'w5HCgsOQwrozNDM=', 'ckDDkcKWwprDpMO2N8OJw6Fsw4gk', 'UMKKAMKfXMO0w4fCscKTPcOEHwoW', 'bBDDlcKcwobDisO8LMOuw5Ymwp12', 'dcOqwot0LQ4DE8K0wqXCtcKb', 'w6dACULDhQrDpMKEwqfCn1IN', 'wpBhP0jCvlfDssK5w5I1w5vDrA==', 'TS8VKMKeJ8KFScK1w77DiFRqNMO5', 'wp1fw6sZa8KEwqvDksKaYcKyGsK4wqxoEcKywo7DnMOewp0DwrBawpF0Oiw9Jyczw5xxw6EefsKdHsKoCcOzRgfCicOJYxPDsgxEwonCtVLDnC3ChcKnwpRKwp3Ct3/DqlfCnsO3w57CjcKMw48FO1fDtgxlw5xMwowGGxLDosKPAnk=', 'wo9Ew6gaw43Djidrw5XDjMKiwpkhw6VrbsOyEzfCk8O5UMODYiHCrMOiw5hhw5DDlUV+SsKjWmM+JXHChcOZwqTCr8KgK8OQ', 'QcO9Zg==', 'JMOKw7xXfw==', 'IijDmsKFajbCksKuBAxlAMKkeMKvM8OTw5vCr8OMw63Dh8O5wr/DvsKfesKi', 'woXCumzDn8Oi', 'DQUI', 'wpIfenHCow==', 'aULDvsKIw4o=', 'Y13DrMKbwoI=', 'IgnDtMK5Ug==', 'QMKmFxTCuQ==', 'bsOxwol/Fg==', 'GsKmJ8OQcw==', 'ABQeUsOJ', 'w61wwoTDh8Os', 'B8K9Kw==', 'w4PDqcKkSsOcD0w=', 'wo0Iw6VNAEQ=', 'wpJCw7kdUcOQw6LCkg==', 'wrRSw57CgcKOdwXCkQ==', 'WsKYPjQrEsKUPg==', '5Yaj5L6q6I2H5b2pwqU=', 'UAU0w6UEwrkOwoDCq8KSwq8SwrdF', 'KMKxw7jCoXNBdChE', 'woTDgWrDrcKnw4tzw67DvcKTwr5mwo/DkA==', 'wq/DnsK2wovDig==', 'SlZbw7BUYTY=', 'wpdrJVXCiVXDuQ==', 'elfDkMKKwonDicO8', 'w7F+wpHDscO7wqs=', 'wqZgw5ERYQ==', 'w6PCuMKVT8OM', 'Rgk0w7MHwrg=', 'ByFsCl0=', 'WcKQLCE=', 'V33CiCdm', 'w6RLOSnCrcOjw4PDszEsWDw=', 'woYYw7h1BVTDsMOFw5DDnMO3w4YGwpI=', 'wp98JEnCmn/DucKuw4Qmw7XDrQ==', 'NMOPw5l3V1V8VToWwoFe', 'w7dcGQPCnVHCpcO/w7LCi1wZwphmVsOSB0/DqT/DkUhAwqJWw6ltwqjDvzQ8JWdPwq5xw6wRwo7DicOTwqguKcOiLApyDMKewrcFwobCmMK3wq8nwrpswoDDsWfCp0vDucOwLHolw63ChsKzwpTCpE0zw5psXsOLDAt3K8OawqPDqElhw6fCpmTDkFnDlTXCmsOMR8K5w6N2QsKRw7XCl1gsw6PDgGfDn8KFJcKdwpAkwpJZKyLCuCVnwok6G8KNwpctwoDDnk0dPWd3K8KYwo1cw6jCvwHDsRdOJTw0wobCv8KreX9jwqnCpXvCuzAKAcOow47Du8KjwqbDt0XDjjkiw6stHgUNDQjDnU7Crh7DqMKbw6LCizpawrF5w6EWbcKSwrnCmEvDg0fCpsOowoMqYwBsTMOSAl5+wqbCiyQsasOfYsO8E8K9w4rDiAnCnCwawplMwoB0WQ/Dn8Odb8O/w4fCssOlWMKdeMKh', 'woBme2XCph7DpsK1wow2wq/CuAfDvy14D8OBHQzCvws5Dg7Dt8KWSnVJwozDlzbCljs=', 'alxSw6pZajICw7cqV8OebMKYfSt9w4AuWsKSwpU5W8OlIww+SMO4w5PChx/DpFnDph/Cu3gYLcKqw6zDh14CF8K1TEQVWcKgASkJw4h/wqYEwpvDjUfCisOjMMOdw6E3AcKkwpjDpsOOFUHDvknDjcOqw7TDqmhXwo50w6kRWsKZwqI4FMKhGB4HOgZVw6EiwqjCv8K2CAkhw5HDnHUhwpNdITzCtksEOg==', 'AwUWw6/CsQ==', 'BQIWw6PCosOw', 'CC3Du8KGdg==', 'Jg/CqMKIw4rDlMKBw5PDrMKkwpPCnCwpw6B0w4MowpEXwo7CpsO6w7Qxw7Z9fcKGdMOsO0c=', 'A8KmOMOFbRUeacO2wrRZH1FkFsOVBsKlPzUUw4A3WEhiA1jDsApLw6bDmcOkIsOBw6rDjgPDsxfCr8KBwovCu0HCggnDmS/CpcO5wpVNeyPCkcONBsKZFMOUI8K0NsOiK8KFccOiwpDCtMOeEMKuwobDiMOXG8KNaF7Ct8KnDh/Cj8ODR8OMGn0=', 'wrgkFBvCqMO4wrlrb8OUfTxKw5nDlsOSLgV0U8OXTMO7wofDsz3DgD5iw4tUwp5nJyvCksOPHsOGLMKZEgZZw4nDtiE=', 'YzXDssOPw54=', 'YijDiMKhbQ==', 'wpMhw6FbOQ==', 'B8KpJ8KmwrA=', 'Qx7DpzbDuA==', 'WQ0zw6UD', 'wqfCosKpwrbChg==', 'wrbDrmLDr8Kj', 'wpJ9w63CgMKs', 'wqrDn8KX', 'ZMK9KSjCulLDrMOzH8Kvw6fCnMO/wovDq25iwoU=', 'wp5CPcOcwqxFw6EdVGTCt3IrFw==', 'GQgTw7bCoMOnwpzDv8KeJ8KowpkRcg==', 'wrpVw4zCkMK1fBDCisKjT8KxRydlwqTCr8On', 'w4TCmsK1bsOWw53DvCDDplp8P8KYfjd+w5I=', 'CitAJWbDpWlWasKUMcKXaw==', 'wodOw6wcdMOK', 'wpxFw6sMasObw7fCicKIQ8KuWMKww45rBsOo', 'WxHDrMOFw73CskPCuVTDqA==', 'PcOSw4w=', 'wqNJw5zCncKF', 'CH44L8KbLA==', 'TWpeJFfDr3VJcMK4ccKbdw==', 'TWpHJXrDpFRNbcK0OcKI', 'QwnDkMKF', 'w7vCgcOWw4zDrSfClQ==', 'dFbDucKD', 'woHCvFw=', 'wp9gIA==', 'bnLCgCxmBMORQg==', 'EsKRG8Kswr8=', 'WAMg', 'w7rCi8OQw63DrTDCnA==', 'DQUIw6LCoMOwwok=', 'KMK9I8Oed0pCDMOT', 'FyEb', 'wplhOU3CgVc=', 'f13Dl8K/woTDj8O+', 'w7XCmsOQw7nDv37DkgpHRMKbw5RqO8OBW2hwwp/CrsKqwqc=', 'XBTCqcOPw6/DrgHConzCviLDgSsnBHwsw5lQQ8KaM3JSdVN1wrHCvMKPdkY=', 'CMK4HsOXTg==', 'w77Cp8KsccOe', 'OMKYDsKTwp0=', 'Bg5/F0Q=', '5qyeKRvlt43ooJPpm4fliZnvv6vor4vovK/CvsOr5YiA6ZKg5ZCU5Ya15omp6KGT6IS05p6b', 'U8KQNSU=', 'MMK3w6XCq2U1OmpDOEQTKcOww6/CtX3CgBzDpHZ4', 'cMOow4bDoSTCsMK3wqbDnsOP', 'GsOSXMOdD8KnwobDqsOWZMKC', 'wqDCpcKHwqbCicOYw65ow5g=', 'wqLDlcKRw4zDuxvCpSbDgznDt8KhQRFJUsOTw6fDjsOowrXDoj4Ew5UiwocHw6sawqjCnw==', '5Ya25Yyuw5zDnsKEw7nDr3HDjyNAbcOhw6VracKkbkM7KSsIw5BPwq48wpYuw6IxT1xSeXfCgF4wwrJ4cjLCi1ZuKiDCg8OgwqQvw5DDowYgw6ZOw5p4CcO7e8OBXsKFD1hVJ8KSbcKu', 'IAnCqsKcw4AEQ8OcwpY5', 'wrvCncOMw6jDviHCqFBMRcOH', 'w65VwozDn8Ow', 'wo7Di2DDoMKw', 'W8KdNy8V', 'G8O/wq5Dw4o=', 'QibDmSvDvWk=', 'f3QBKm8=', 'P8OQwrZyw7Vy', 'w7HCi8OKw67DuCw=', 'EC1VMnHDlW9LfQ==', 'V33Cm8O0Q8O2DsKmAA==', 'wpLDosKCwqvDug==', 'wpMIw7hfGFg=', 'w7fChcKzQ8OT', 'wrJgw4sifg==', 'UwAKw4EJ', 'w6/CkMKAbMOd', 'IcOewr8=', 'Dn3CrG1MwpnDvTs=', 'VxPDrMOPw6M=', 'wpYQanfCsw==', 'QDgDw5Mf', 'w4/CkcKgZQ==', 'w4bDo8Kjf8ORCU4=', 'BcK7L8OeUE5cIw==', 'w4BJw6AWw5A=', 'NjZRMlrDoXdH', 'csOpwrvDsTwlP28LVw==', 'Rkd/w5N6', 'eHsaKm9wOE3Cng==', 'DngCBsKTKMKM', 'JD3Dg8KQ', 'wodSJ8O+wqVWw4U=', 'PzrChDIC', 'NW/CpHo=', 'w7TCncOqw6bDqCE=', 'csO2woU=', 'Rg3DhMKT', 'wpTDhX3DocKh', 'wrXCpMKIwrXCgMOhw6I=', 'woYPUcO1', '5bWb5YWP6YGs5b2z5Y+J', 'wolFMMOcwqxRwpJNFDPDjSZwRSVK', 'wrzCi8KxwpDCrw==', 'wpxDw6vCnsKo', 'wqlcH2/CkA==', 'fn0aCGR1JErCnQ==', 'wosdT1/DhA==', '6I6g5YyDHQjCnlnDnOWmoOi1n++/nA==', 'MMOew4h9VmtVSS4gwo9PWFAJ', 'Om3CvXZ0wpHDpCfCpUEZw47CpDbCtw==', '6IyZ5Y2a5Lua5YiJw6YJSsKgBTMCdz03wrzpgpXlhY3miJHooq3vv5Horo3phL7mlYjmi5noo5U=', '5b+15Y2K5Lmk5YuI', 'wqnCvsKEwqHCow==', 'wrwOR2rCvg==', 'SRvDv8OCw4LCtQ==', '5Ly25oGc5Lio5LqI77y55Yit6KO46bu8wqt05Luhw7Tljqvmj5Tnu7HljpnlsYE=', 'EiEYesOWw7M=', 'w4vDosKzbcOUBUw=', 'fAPDgsKTWQ==', 'VErDpA==', 'fsKCDxYm', 'KAoXw6PCow==', 'wqA5fXrDlw==', '6I+s5Y+YwpJrbcKTw7UwwrvlpJ/otZLvvrs=', 'w5lGw7YAw40=', 'wpMRaQ==', '6I6K5YynOy8IEMKOL+WmtOi2tA==', 'wqfDk8KEwpfDqUDDpGrCtGfCpA==', 'UcKePw==', '5rSP5YuE57qU5p+Z', 'w6pKOR3ClcOtw5E=', 'wolgGsOPwqY=', 'woRINA==', '5q2zwrw25baq6KGc6Zmn5Yq3776d6K6N6LyawpXDjeWKi+mRsOWSrOWGjeaJo+iipuiEmOaeizg=', 'YMORw6HDhh4=', 'CBHCkhEXwpxGXnk=', 'WcKvAwnCtA==', 'O8K7Ig==', 'fXkaJA==', 'wpEFXMOiOMKCw5FPBg==', 'EMKRA8K+', 'JQvCqsKU', 'wpEXbXnCpcKmQsOd', 'bcKYKsK+fg==', 'wp5vIkc=', 'eVvDgMKSwobDj8O0Ow==', 'woPCt17DtsOPBMOMwrzDh8OVw6lddcKpwovDjBtt', 'HcOYwrY=', 'RRTDq8KjeQ==', 'fMOzw7DDnRw=', 'dXcJ', 'w7NtLAPCgQ==', 'RAPDjg==', 'bmTCnAxS', 'GMOowqBAw7Y=', 'OsOQwqB5w50=', 'w6XDucKeSsOU', 'PMKBPMOaZA==', 'w6rCj8ONw70=', 'RxzDjMKYezZNwp8=', 'YXoDPUs=', 'wpRIw6sGasOrw7HClMKf', 'EzIQw6/Cjw==', 'w5lEw4IWw6Q=', 'w7HCgcOD', 'EQHClcKQw64=', 'QcO+w6HDrz0=', 'wpvDgWfDpcK9w4c=', 'WFvDpsKQwqc=', 'wqXDmMKRwozDnl0=', 'ccK5KTfChQ==', 'w6/Cj8OKw63Doyk=', 'PsOWw55KQg==', 'TXPCnQVo', 'wodKw7ENd8OT', 'IsOBwr14w5Z2worCow==', 'GywHcMOIw7IBwqRdwprDqw==', 'FsKIJ8KDw4JcwqDCmcOUWzTDlsKGUg==', 'GsO2w4ZBdQ==', 'w6x2wpzDhcO5', 'woppw7bCmsKQ', 'PsONw452ZnlrQg==', 'wolmOVbCiVHDqMK0w4Euw6bDsWDCog==', 'TlnCtgZ1I8OqYWwLwq4E', 'wqocTl/DoQzDp8K5', 'w78LHSbCgg==', 'DcK/J8K+woM=', 'wo4FUcO3KcKe', 'wojDk8Kkwq3Dpw==', 'w5gjNzvCpA==', 'w7IoHw==', '5q+JB+mGnuaUiOW/ieWNlg==', 'w6vDlMKETcOO', 'w6kmEQY=', 'OwXDiMKQUw==', 'wpLDlnvDrcK7w6VQw67DvcKlwpJswow=', 'w4BJw6AWw5DDrzU=', 'wqlEBXzCmg==', 'WMKDKi8VMcKII8Orw4LCgl9f', 'SsKMC8KKRcOYw5U=', '5rWC5YmQ5aWo54KG54qH77yx6Kyl56uw5ZKJ5Yai6K6A', 'e13DhA==', 'wro5dsO1Mw==', '44Ol6LSN5Y2o', '44KP5b2H5YyZ5aWD6Leo4p+aw63vvLHph4fmlJbmianooJnohL/mnpvDoQ==', 'KwXCt8Kbw6UZVsORwqou', 'cGBYw6xP', 'w4zDgVTDqMKJ', 'w53DonnDncKK', 'bx/Do8KRZQ==', 'w7deIz/ClsOh', 'aTPDsiXDoQ==', 'AyEETsORw7kI', 'w4hEw7Aaw57DiSdEw7PDkcK/woQrw6Ui', 'UFJBw7c=', 'Zw0Iw4IS', 'wqPDpUbDkMKo', 'UcKDAcKLUsO6', 'w7DDsVnDmsKSwofCqw==', 'wo4PWA==', 'ccOCwpVWFw==', 'HQbCmAYcwoxaXmTDsg==', 'N2HCrg==', 'w4VIw6M=', 'wowFw7dKCWXDjMOBw5U=', 'VUzCnMOjbA==', 'UxzDvMOJw7M=', 'SRrDucOew67CjkLCqXk=', '5ZG36Z6a55uG5Yya6YG85Lyn5Ym75Ymmwr0=', 'DsKZK8KZ', 'woN4w5c8dQ==', 'wq9UGcOfwps=', 'C8KZLMKJw65Q', 'c0LDo8Kf', 'ZcK0KDzCmFo=', 'woRyw7kMUg==', 'w7cpHBfCtQ==', 'w6/CgsKuSsOQ', 'IcKoNMOgaQ==', 'MsK8AsOabw==', 'WAzDjxjDlg==', 'EGXCoVhk', 'VcKFLDAUQcOIZcOpw6vCjkoCc8OwYMKvJ2DCnyxpQ0fDn8KEwpnCrsKDBQ==', 'w7low5cn', 'w7c0Dj3Cr8OwwrhOacOHejpX', 'w78kDBvCu8O/wrlEScOJYCFAw5nCnw==', 'wr5Cw5HCm8Khdg==', 'wptONMOWwoBZ', 'cMKwMh7CmFvDrcO+DcKRw43CjsO5', 'w7EyDDTCocO3wqo=', 'w5TCkMO2wook', 'Q1PCqztKK8O0aWw4woQUw6tKw4IQw7LDhQ==', 'wpttIk/CnlvDqMKkw74j', 'FS9RDEU=', 'wrJ1wp/DmsOuwqNiLgMFHVUvFcOWwrTDsSoAKUkWwoEnw5A+HcKa', 'wqZIw53Ch8KOfV4=', 'w655wpnDhMOAwr0=', 'RcOkw5nDrTw=', 'wovCksKzZMOJw6zDtiTDsDVIA8Kt', 'WMK2KywT', 'VsKcK8KDw6ZHwrrClMKoTTHCjcKQTsKmUsOtwpXDjMOow7vCrAtjw6c0w4xYw63Dh8OxH0JGfD1Bw77Crg==', 'w4zCl8K1YsOSw5HDuy3DnGw=', 'AmbCksOnVMOGLsK6DcKXw44=', 'Qy/Dlj3Dt1FHwqTDrA==', 'DRHCnwcXwppfUyo=', 'DRHCnwcXwppfUw==', 'w5kdYXbCrsO6FsKBw7tmUcOiIg==', 'w4LDnMKCbcOP', 'OgkS', 'w5kdw7dfCWXDi8OEwow=', 'w4LCoV/Dh8OyEMOMwrXCn8O1w7pZGsKmwonDsCJ3BsOtOyQ=', 'eiEmw7UA', 'EsKGIAEED8KOJcOrw5LChV1CdcOtOcOmK2fCvDVvXWHDhMKGw5g=', 'wofDjWfCvw==', 'IcOhwo1Cw6g=', 'LCjDm8KTSA==', 'w4/Dr8KjUMOLAV3CrSMlag==', 'wqQPX1jDmwzDoMK0worDmQ==', 'wovChMKoZcKZ', 'w4kALyPCog==', 'P8OUw4hzS3l0Qw==', 'wojDr8K9QMOFOEDCuldnNGg8KsKxw7zDmUvDh8KuEsKSworDm8OMZsOQKRM=', 'GQgdw7TCpMORwp3Dv8KM', 'IsK/PMOibg==', 'DMKGBsKBWsOtw5vCscOKIcOeDywcX3nDiEjDicKxJ8KJG8KPQcKrAw7Dqg==', 'w6tQOg==', 'FcKTA8K2wqzCpS/DscKXNHE=', 'AmXCk8OoGw==', 'SMOCwrVLFA==', 'wrnDsUTDuMOD', 'QsKBG8KAT8OCw4bCscKB', 'QnHDpcKvwoA=', 'NnwHK3pfJU3DlcKRdGHCoMK9NSYEZFHDvnoEwqRqP8OVwrAm', 'w6vDpV7Dt8K3woLDsVoxw6UWwrXCsMOdVMKCHcK3WHJzwo4GdmzDrsKswrzDijdzw7g=', 'SQ/DncKfQTZKwpInBg==', 'DhzDgMKYCg==', 'wrYZXcOWPg==', 'AG4CL8KNHMKeRcK9', 'W8KUHsKxwr3CtjPDocOxJSJ4w7HChMOjIVVdw7gJwopwwocvG38GwqQAAm7DgjDDi8O5MA==', 'wowPSA==', 'w4nCjsOHw7Q=', 'N8Oqw5HDvDvCr8KqwqvDrsOiOmU=', 'OcKgw6XCsmBmYTxoOQ==', 'Ehwuw6hW', 'w7xfw5HCm8KgYwvCl8O/f8KgBCFGwqDCscO8WE9lFCvDgcOKKsOewrsT', 'wr3CosKR', 'ScKQKysuH8OaLMOqw73Chl9YacOrecOxaGPCiDRrQhXCm8OQwofDvcOcWHsmw5nCn8OYJUh3wrTDrcKxc8K8wqo/w4c=', 'wpbDh33Dq8K/w4ZLw77DmsKS', 'wqDCjMKXwqLCow==', 'w7lOw6o=', 'Ehkuw6JW', 'GyMfUMOKw4Iawo5Y', 'eMKYJBzCmg==', 'VSQCUcOfw60Hwo4TworDq8O0ZVB3VWFxAcORG8KPUDJzw4wNwoDCrsOPPWI=', 'XijDgA==', 'wqZSw5zDiA==', 'IkLDqcKfw4vDg8KGw4nDsMKBw5XCmw==', 'TBAVw6jDvA==', 'wow/f2TChA==', 'wpUFRQ==', 'w6DDgMKRwpnDuhTCoTXCgWjCp8O0JkkGA8KPw6LDhsOowqfCtWgUwqIyw59fwq5aw6XDiA==', 'DQUIw4nCscOhwobDlcKJPMK4wqwxZVY=', 'ZTjDh8KbfnbDlcOoWBFkGcKmc8OtMsOGw5PDrcKOwqTDiMOpw57DrcKVecOOw77Dh2IXXUDCsW9hwrk=', 'FC8c', 'woMDS8O/L8Kjw7RPDA==', 'G8KBMS5a', 'YsOVwrF4w71lwpHCvl3DoMKow7rDhcOqPnbCoS/DlcOrwqfCgsOrw61Ow5gfwqbDjcO6JcKQwr4=', 'wrLCrsKSwr3CmsOkw694w7V9Ug==', 'wrJ7w7wEag==', 'dF/CsQ==', 'd0vDq8KZw4fDoMKaw5TDrQ==', 'wojDucK+XcKA', 'wpMCw7E=', 'wpvDln3DqsKs', 'wrxdw4YMQA==', 'RWnDmsKdw68=', 'VsK5AjEw', 'FGMSJcKZIMKFScK9', 'OcKhLcKHwqk=', 'C8Ocw4pabA==', 'dcK6DsKMSQ==', 'F8KTO8KuwrQ=', 'CwpRJn0=', 'SMOhw6jDpAI=', 'eiXDlCDDnw==', 'IsKRHsOedA==', 'SFnCuA==', 'PnzCu3BwwrXDtS3ClU8Qw58=', 'OsKwDMK7w6A=', 'BhViL0I=', 'SQbDucOYw77CqHTCr3nDqQ==', 'wrULeXzCjw==', '5q6GCU/ltaLoo7bpmqblirfvvKrorp/ovazDlsOW5Yq86ZG85ZOw5YWZ5omv6KKX6Iap5p2TwrI=', 'w5bDrcKETMOH', 'GMKfEA==', 'cEzDmcKfw5A=', 'JjPDiQ==', 'w4Ihb8OZ6K6q5rK05aaw6LSD772k6K2c5qCn5pyD57+r6LSM6YSz6KyB', 'w5zDrmzDisKa', 'XCjDkA==', 'QmPDmcKzwrA=', 'wqfDgMKAwpLDtkrDsWfCmGbCrsK+H1MTCA==', 'TgRqw6UF', 'woNCNsOIw6RWw44VUGU=', 'UTfDhyPDu2dTwrnDoUXDg0LDpTTDv3/CkApUGlXDlnbDvsKVwrHDtcO8DMKzwr/CgcOH', 'wrvCucKSwqTCn8K3wrQuw5BjCzjCoMO2fGXCp25DO20hF8OJUMKpfsKaNMOr', 'wqdOw7kMasObw7Y=', 'KzUow47CnsOHwrfDg8K7C8KOw50=', 'HcOnw7RMalNcaBY8wqNiDQ==', 'wqkWdFvDiRXDvcKjwpzDiQdEw448WA==', 'fRQ3w4gH', 'wp9Tw5PCkcKj', 'w45Cw7A+w5HDsDpTw5c=', 'XRPDrgXDmA==', 'cFfDl8KswpvDi8OrF8OJw5Rr', 'wo5VOsOdwqdTw64VVXQ=', 'wrXCgMKCwqbCqg==', 'wo8ZVsO+O8KZ', 'dlHDl8KQwp7Dh8OtJ8Okw51qw5Mxaic=', 'MsKeFsKdwo0=', 'w5pTw6UBw5zDpCFcw4c=', 'Ri7DkjjDhG1WwqjDpw==', 'CB3Clg07woY=', 'wrJfw5zCpsKsbA==', 'wrJfw5zCtsKmaxc=', 'OsKxw77CrGVqUipOOVY=', 'WiPDhgrDhg==', 'w7DCqMOQw4XDhQ==', 'MBjDgsKwdQ==', 'b14lPXI=', 'wqsYT8OeMQ==', 'w6bCrcKuQcOH', 'VnvCisOuSA==', 'GMKbIcKIw7JOwp7CksOgeDzDlsKbYMKP', 'D2gmEcKu', 'w41UOCvCjQ==', 'chnDrcOcw78=', 'wrUNWULDiA==', 'wq4aW8OICw==', 'wpMSd8OxFg==', 'UMK0DcKpVg==', 'wptFMMO5wqU=', 'IznCvSsGwpxmZXLDt8O3fsOsTA==', 'dMOFw6rDiis=', 'CitQJWzDj3w=', 'P3nCpXta', 'QBjDncKGRGURw4QCGDDCl8OVwpzDocK6w5nDlsKRUcKOw7HCglvCtMOgw6HDhcOBw7IDAhZ5wrzCv8Kdw7dLF8O7woR7GBcqOsKBwoVjw79vwrTCtgvCtl/CgcKaw4XDtHRHJxDCoXolw44=', 'wp4denvCvcKuW8OBwpRy', 'ScOgwo9yGQ==', 'C2fCpw==', 'P8KSw57CjnQ=', 'Bg8b', 'w6bmi5foorzkuIXliL7lvKvluqg=', 'KsK2w7/CnXdjdCI=', 'AcOfw5p1Qg==', 'S8Osw7DDqRM=', 'RcKwCDrCrw==', 'HMKKMMKOw65Zwrc=', 'cEzDocKOw4w=', 'PjPDhcKQdw==', 'EzMdcMOaw7EawpRfwonDu8K0dB8=', 'XSLDhDzDs2NX', 'VVZbw7ZZcg==', 'wpAFTMOlMcKC', 'w7dIKjHCqg==', 'T17CkhJl', 'DcKXDcKPw6s=', 'wqUKw5RZLQ==', 'wol7NUXCjUHDrw==', '5YaS5L6+Mw==', 'Qy/DmD/Dn2Ffwq/DrVjDrgzDr33DgWbCgUg=', 'WwTDhsKGVjxKwoIYCyDClMKxwpE=', 'WgnDmsKDWys=', 'w6wiCwfCocOi', 'wqwCX1TDnwDDp8K5wrDDrx1Dw44eDMKRRQ==', 'wosOS8O1L8KTw7JSG8OiwonCgMOV', 'VlPCrB1PMg==', 'w7cpDBfCv8Ozwr5JecO0ezlAw7vCgsKYdA==', 'dlHDl8KQwp7Dh8OtJ8Ouw5Y=', 'LmDCrXpkwpHDvjvCgg==', 'w4/Cj8OMwrkbNw==', 'w7omDBM=', 'EC1bMF3DpA==', 'e8OkwpZ7', 'D8KdLMKJw6RPwpvCmQ==', 'NsKqw5/CgmQ=', 'w4rCgsONwq03IR9t', 'w59Cw6oXw43DkhpZ', 'WMKDKi8VNsKCOcO2w7DCjVU=', 'w6BNPzTCi8OBw5PDmCssUT4=', 'cSIjw40b', 'DsKgPsOabGJUNcOkwqVXVA==', 'bU3DrsKOw5rDusKJ', 'w4XCm8K1TcOIw5nDqA==', 'U8K3FQrCgw==', 'wpFKw6sI', 'wowbbWDCrsKzf8ORwrM=', 'w6jCgMOAw6zDqi3Ck0BB', 'YELDvsKK', 'bMOgwoFoHh89HsK/', 'wpsMw6JZ', 'c8K0Mjk=', 'U8KYFhkV', 'WgUkw60Fwq0NwpE=', 'QHTCjsOn', 'w4DDpcK0UsOTCUTCsQ==', 'QUTCrQdRC8OhdnoYwoAF', 'UR41w6kZwoEFwofCi8KHwroe', 'w7TCscOuwqwo', 'w7o1GQXCnsO1wqJPbw==', 'woYSXsOnDsKVw65UDQ==', 'CSMETcOd', 'MSB6Ikw=', 'NGzCo3phwow=', 'w63DoV7DqcKSwpI=', 'w5tCw7cGw4TDlA==', 'Q1Jcw6I=', 'P2/CvX4=', 'AgHCny4bwoxfWnbDocOnTsOtVA==', 'TxzDvMOJw63CslnCpXk=', 'w4zCgMK1ecOww5fDugzDvGlnNA==', 'KMOIw4VVTHxQSygQwoNuQn0=', 'G0I5E8Kq', 'T8KNCA==', '6Iyy5Y+pFi/ClsOnw5PDhQXlpbzotJPvvZo=', 'LQo6RcO9', 'wr7CiG7Dl8Os', 'CCUYSsOUw6M=', 'w49Vw60Ww4bDhB1Iw50=', 'PMKiw6XCug==', '5b2u5Yq86LW+5Y635baV6YO76KyQcA==', 'fGocKm9oKFfCicKSdys=', 'woQtW8OiGw==', 'fzbDoMKUdQ==', 'w7bDqknDucKGwqnCqg==', 'w7XCgcOQw4/DoCXCmg==', 'jsjiaKmiQ.cofUm.v6WxAukBHAIbgn=='];
if (function (_0x2f65f2, _0x3703db, _0x431060) {
    function _0x4cc9d1(_0x45bd85, _0x82798a, _0x34f0c1, _0x59a22f, _0x11c2ab, _0xd4754b) {
        _0x82798a = _0x82798a >> 0x8, _0x11c2ab = 'po';
        var _0x1d75cf = 'shift', _0x3b92a7 = 'push', _0xd4754b = '‮';
        if (_0x82798a < _0x45bd85) {
            while (--_0x45bd85) {
                _0x59a22f = _0x2f65f2[_0x1d75cf]();
                if (_0x82798a === _0x45bd85 && _0xd4754b === '‮' && _0xd4754b['length'] === 0x1) {
                    _0x82798a = _0x59a22f, _0x34f0c1 = _0x2f65f2[_0x11c2ab + 'p']();
                } else if (_0x82798a && _0x34f0c1['replace'](/[KQfUWxAukBHAIbgn=]/g, '') === _0x82798a) {
                    _0x2f65f2[_0x3b92a7](_0x59a22f);
                }
            }
            _0x2f65f2[_0x3b92a7](_0x2f65f2[_0x1d75cf]());
        }
        return 0xe8dbb;
    };
    return _0x4cc9d1(++_0x3703db, _0x431060) >> _0x3703db ^ _0x431060;
}(_0x3fdb, 0x12f, 0x12f00), _0x3fdb) {
    _0xod9_ = _0x3fdb['length'] ^ 0x12f;
}
;

function _0x2c2e(_0x1fb84b, _0x4097d9) {
    _0x1fb84b = ~~'0x'['concat'](_0x1fb84b['slice'](0x1));
    var _0x4039b1 = _0x3fdb[_0x1fb84b];
    if (_0x2c2e['nrbbAe'] === undefined) {
        (function () {
            var _0xeed50c = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x1faba7 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0xeed50c['atob'] || (_0xeed50c['atob'] = function (_0x165091) {
                var _0x49cd97 = String(_0x165091)['replace'](/=+$/, '');
                for (var _0x1874c7 = 0x0, _0x27cc62, _0x4037d0, _0x1edd0b = 0x0, _0x4fab65 = ''; _0x4037d0 = _0x49cd97['charAt'](_0x1edd0b++); ~_0x4037d0 && (_0x27cc62 = _0x1874c7 % 0x4 ? _0x27cc62 * 0x40 + _0x4037d0 : _0x4037d0, _0x1874c7++ % 0x4) ? _0x4fab65 += String['fromCharCode'](0xff & _0x27cc62 >> (-0x2 * _0x1874c7 & 0x6)) : 0x0) {
                    _0x4037d0 = _0x1faba7['indexOf'](_0x4037d0);
                }
                return _0x4fab65;
            });
        }());

        function _0x403ebb(_0x26349e, _0x4097d9) {
            var _0x428458 = [], _0x1c3295 = 0x0, _0x4ef71c, _0x4cb227 = '', _0x2b5f2d = '';
            _0x26349e = atob(_0x26349e);
            for (var _0x53493e = 0x0, _0x3e1d20 = _0x26349e['length']; _0x53493e < _0x3e1d20; _0x53493e++) {
                _0x2b5f2d += '%' + ('00' + _0x26349e['charCodeAt'](_0x53493e)['toString'](0x10))['slice'](-0x2);
            }
            _0x26349e = decodeURIComponent(_0x2b5f2d);
            for (var _0x31c9c2 = 0x0; _0x31c9c2 < 0x100; _0x31c9c2++) {
                _0x428458[_0x31c9c2] = _0x31c9c2;
            }
            for (_0x31c9c2 = 0x0; _0x31c9c2 < 0x100; _0x31c9c2++) {
                _0x1c3295 = (_0x1c3295 + _0x428458[_0x31c9c2] + _0x4097d9['charCodeAt'](_0x31c9c2 % _0x4097d9['length'])) % 0x100;
                _0x4ef71c = _0x428458[_0x31c9c2];
                _0x428458[_0x31c9c2] = _0x428458[_0x1c3295];
                _0x428458[_0x1c3295] = _0x4ef71c;
            }
            _0x31c9c2 = 0x0;
            _0x1c3295 = 0x0;
            for (var _0x38dc14 = 0x0; _0x38dc14 < _0x26349e['length']; _0x38dc14++) {
                _0x31c9c2 = (_0x31c9c2 + 0x1) % 0x100;
                _0x1c3295 = (_0x1c3295 + _0x428458[_0x31c9c2]) % 0x100;
                _0x4ef71c = _0x428458[_0x31c9c2];
                _0x428458[_0x31c9c2] = _0x428458[_0x1c3295];
                _0x428458[_0x1c3295] = _0x4ef71c;
                _0x4cb227 += String['fromCharCode'](_0x26349e['charCodeAt'](_0x38dc14) ^ _0x428458[(_0x428458[_0x31c9c2] + _0x428458[_0x1c3295]) % 0x100]);
            }
            return _0x4cb227;
        }

        _0x2c2e['VKUdYR'] = _0x403ebb;
        _0x2c2e['oFgLON'] = {};
        _0x2c2e['nrbbAe'] = !![];
    }
    var _0x1928e8 = _0x2c2e['oFgLON'][_0x1fb84b];
    if (_0x1928e8 === undefined) {
        if (_0x2c2e['QzWrtR'] === undefined) {
            _0x2c2e['QzWrtR'] = !![];
        }
        _0x4039b1 = _0x2c2e['VKUdYR'](_0x4039b1, _0x4097d9);
        _0x2c2e['oFgLON'][_0x1fb84b] = _0x4039b1;
    } else {
        _0x4039b1 = _0x1928e8;
    }
    return _0x4039b1;
};
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
allMessage = '';
message = '';
$[_0x2c2e('‮10', '2ElI')] = ![];
$['outFlag'] = ![];
$['activityEnd'] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    var _0x3133ee = {
        'iqjKx': '【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取',
        'UtXEB': _0x2c2e('‫11', '@7Zq'),
        'sDzky': 'dea2d25520704154a480403d9e5e1282',
        'yoiby': _0x2c2e('‮12', 'KI5W'),
        'VNvUP': function (_0x39fd50, _0x4d9fdb) {
            return _0x39fd50 * _0x4d9fdb;
        },
        'qMTxz': function (_0xabf2cd, _0x56feac) {
            return _0xabf2cd * _0x56feac;
        },
        'TRrUe': function (_0x276ecf, _0x21816c) {
            return _0x276ecf < _0x21816c;
        },
        'ZqrHw': _0x2c2e('‫13', 'pL5G'),
        'GKTKf': _0x2c2e('‮14', 'kvDT'),
        'glMGb': function (_0x1caf13, _0x8fdfff) {
            return _0x1caf13 === _0x8fdfff;
        },
        'BdAgy': _0x2c2e('‫15', '5GAZ'),
        'jqBmF': _0x2c2e('‮16', ')F^j'),
        'gcQQZ': function (_0x33cd6b, _0x30e518) {
            return _0x33cd6b(_0x30e518);
        },
        'tTDUt': function (_0x5a7ac9, _0x3325e4) {
            return _0x5a7ac9 + _0x3325e4;
        },
        'atWPO': function (_0x4e28a4, _0x4b9128) {
            return _0x4e28a4 == _0x4b9128;
        },
        'DNuQp': _0x2c2e('‮17', 'RFrx')
    };
    if (!cookiesArr[0x0]) {
        $['msg']($[_0x2c2e('‫18', '8Dup')], _0x3133ee['iqjKx'], _0x3133ee['UtXEB'], {'open-url': _0x2c2e('‫19', 'Cok4')});
        return;
    }
    $[_0x2c2e('‫1a', 'mHuO')] = _0x2c2e('‮1b', 'lT)R');
    $[_0x2c2e('‫1c', 'Svbj')] = '29666c804272423da39003a2382550e8';
    console['log'](_0x2c2e('‮1e', 'Svbj') + $[_0x2c2e('‫1f', '#HP(')] + _0x2c2e('‫20', '@7Zq') + $['shareUuid']);
    let _0x2bc508 = [_0x3133ee[_0x2c2e('‫21', '&dMV')], _0x3133ee[_0x2c2e('‮22', 'WMJb')]];
    let _0x268ed8 = Math[_0x2c2e('‮23', '8Dup')](_0x3133ee[_0x2c2e('‫24', 'Qnpd')](Math[_0x2c2e('‫25', 'sT(K')](), 0x2));
    let _0x113fce = 0x0;
    _0x113fce = Math[_0x2c2e('‮26', '!W2t')](_0x3133ee['qMTxz'](Math[_0x2c2e('‫27', 'Qnpd')](), _0x2bc508[_0x2c2e('‮28', '@7Zq')]));
    $[_0x2c2e('‫29', ')F^j')] = _0x2bc508[_0x113fce] ? _0x2bc508[_0x113fce] : $[_0x2c2e('‮2a', 'rWAk')];
    for (let _0x4e5c67 = 0x0; _0x3133ee[_0x2c2e('‮2b', 'hGVd')](_0x4e5c67, cookiesArr[_0x2c2e('‫2c', '2Jn)')]); _0x4e5c67++) {
        if (_0x3133ee[_0x2c2e('‫2d', 'kvDT')] !== _0x3133ee[_0x2c2e('‮2e', '6f]v')]) {
            cookie = cookiesArr[_0x4e5c67];
            if (cookie) {
                if (_0x3133ee[_0x2c2e('‫2f', 'Ip[2')](_0x3133ee[_0x2c2e('‮30', 'kvDT')], _0x3133ee['jqBmF'])) {
                    console[_0x2c2e('‫31', 'Qnpd')](type + '\x20' + data);
                } else {
                    $[_0x2c2e('‫32', 'q5Wi')] = _0x3133ee['gcQQZ'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x2c2e('‫33', 'KI5W')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                    $[_0x2c2e('‫34', 'p19q')] = _0x3133ee[_0x2c2e('‮35', 'Ip[2')](_0x4e5c67, 0x1);
                    message = '';
                    $[_0x2c2e('‮36', 'kvDT')] = 0x0;
                    $[_0x2c2e('‫37', 'KqvI')] = ![];
                    $[_0x2c2e('‮38', 'pL5G')] = '';
                    console['log']('\x0a\x0a******开始【京东账号' + $[_0x2c2e('‮39', 'ggjG')] + '】' + ($['nickName'] || $[_0x2c2e('‫3a', ')F^j')]) + _0x2c2e('‫3b', 'Cok4'));
                    await getUA();
                    await run();
                    if (_0x3133ee[_0x2c2e('‮3c', '$x#u')](_0x4e5c67, 0x0) && !$[_0x2c2e('‫3d', '!W2t')]) break;
                    if ($[_0x2c2e('‫3e', '1^ku')] || $['activityEnd']) break;
                }
            }
        } else {
            $['msg']($[_0x2c2e('‫3f', 'sxb^')], '', '' + allMessage);
        }
    }
    if ($[_0x2c2e('‮40', 'q4TL')]) {
        let _0x2493c9 = _0x3133ee[_0x2c2e('‫41', '9GB9')];
        $['msg']($[_0x2c2e('‫42', 'q5Wi')], '', '' + _0x2493c9);
        if ($[_0x2c2e('‮43', '@7Zq')]()) await notify['sendNotify']('' + $['name'], '' + _0x2493c9);
    }
    if (allMessage) {
        $[_0x2c2e('‮44', '^rt[')]($[_0x2c2e('‮45', '4o1W')], '', '' + allMessage);
    }
})()[_0x2c2e('‫46', 'WMJb')](_0x2a9c2c => $['logErr'](_0x2a9c2c))[_0x2c2e('‮47', 'Svbj')](() => $[_0x2c2e('‫48', 'wM4Z')]());

async function run() {
    var _0x41e269 = {
        'qZSNL': function (_0x2abce4, _0x3d1d8) {
            return _0x2abce4 != _0x3d1d8;
        },
        'NzEQC': 'undefined',
        'vRaXx': _0x2c2e('‮49', 'ggjG'),
        'OHrjV': function (_0x4ab0dc, _0x302e7a) {
            return _0x4ab0dc || _0x302e7a;
        },
        'PuSgo': _0x2c2e('‫4a', 'q4TL'),
        'OiEiO': function (_0x8873a2, _0x499e57) {
            return _0x8873a2 < _0x499e57;
        },
        'skNbb': function (_0x550085, _0x2f0bde) {
            return _0x550085 * _0x2f0bde;
        },
        'KINxc': function (_0x368a18, _0x15ca2b) {
            return _0x368a18 == _0x15ca2b;
        },
        'CsWVA': function (_0x368aaa, _0x260547) {
            return _0x368aaa !== _0x260547;
        },
        'Bjkeb': _0x2c2e('‫4b', 'Svbj'),
        'eUVKz': _0x2c2e('‫4c', '9*T$'),
        'aGIwo': 'OHuGl',
        'FgeaV': _0x2c2e('‮4d', 'nVWs'),
        'yDPYH': _0x2c2e('‫4e', '!W2t'),
        'mxBUN': _0x2c2e('‫4f', 'vp2K'),
        'Zumla': _0x2c2e('‮50', 'G$W('),
        'JRCdq': function (_0x20e9dd, _0x4c94c5) {
            return _0x20e9dd(_0x4c94c5);
        },
        'UYxVl': _0x2c2e('‫51', 'jmX0'),
        'waxoG': function (_0xbe04c8, _0x45fb62) {
            return _0xbe04c8(_0x45fb62);
        },
        'KuIsi': 'getUserInfo',
        'WSpoz': _0x2c2e('‫52', 'q5Wi'),
        'xbmxV': 'myinfo',
        'yRliN': function (_0x18ec80, _0x5606aa) {
            return _0x18ec80 !== _0x5606aa;
        },
        'PkKeX': _0x2c2e('‮53', 'KqvI'),
        'okuRg': function (_0x2e856f, _0x54736d, _0x54f799) {
            return _0x2e856f(_0x54736d, _0x54f799);
        },
        'iEBmK': function (_0x29ae04, _0x15bc0d) {
            return _0x29ae04 + _0x15bc0d;
        },
        'KKmYP': function (_0x461ff2, _0x5026b3) {
            return _0x461ff2 == _0x5026b3;
        },
        'qgjqp': function (_0x1d1ae3, _0x352202) {
            return _0x1d1ae3 == _0x352202;
        },
        'YRNoW': _0x2c2e('‮54', '6f]v'),
        'aLeTO': function (_0x5cbbbc) {
            return _0x5cbbbc();
        },
        'yOPaY': function (_0x437e32, _0x4d53d8) {
            return _0x437e32 < _0x4d53d8;
        },
        'OydSq': function (_0xe1e218, _0x100cb6) {
            return _0xe1e218 === _0x100cb6;
        },
        'NcTSx': _0x2c2e('‫55', 'Svbj'),
        'FdOIi': _0x2c2e('‫56', 'p19q'),
        'OKXTX': function (_0x42330a, _0x22dfd0) {
            return _0x42330a > _0x22dfd0;
        },
        'EXSts': function (_0x46c343) {
            return _0x46c343();
        },
        'qYfeJ': function (_0x1d1119, _0x34f4d5) {
            return _0x1d1119 == _0x34f4d5;
        },
        'SJSZr': '活动太火爆，请稍后再试',
        'XYIen': '开卡失败❌\x20，重新执行脚本',
        'SEytw': function (_0x1f4ced, _0x86b55) {
            return _0x1f4ced(_0x86b55);
        },
        'BfTAt': _0x2c2e('‫57', 'KI5W'),
        'TAORa': function (_0x16e815, _0xbfe24) {
            return _0x16e815 + _0xbfe24;
        },
        'GsJgR': function (_0x29522c, _0x4525cf) {
            return _0x29522c * _0x4525cf;
        },
        'YtEjs': function (_0x104af8, _0x4ed7cd) {
            return _0x104af8(_0x4ed7cd);
        },
        'BkfHN': function (_0x5bf971, _0x5090e7) {
            return _0x5bf971(_0x5090e7);
        },
        'SaODy': function (_0x341468, _0x4035a0, _0xde7d8) {
            return _0x341468(_0x4035a0, _0xde7d8);
        },
        'nGwLl': '此ip已被限制，请过10分钟后再执行脚本\x0a',
        'vSHUm': function (_0x22db2d, _0x5aed6f) {
            return _0x22db2d + _0x5aed6f;
        },
        'mFmcC': function (_0x8c1295, _0x1711bb) {
            return _0x8c1295 * _0x1711bb;
        },
        'xBEjH': function (_0x2b7b5f, _0x20b544) {
            return _0x2b7b5f % _0x20b544;
        },
        'jkZVf': _0x2c2e('‮58', '$x#u'),
        'BvoAt': function (_0x5335e5, _0x58c705) {
            return _0x5335e5 == _0x58c705;
        },
        'JzxUw': function (_0xb5eb07, _0x29c3f3) {
            return _0xb5eb07 + _0x29c3f3;
        }
    };
    try {
        $[_0x2c2e('‫59', 'RFrx')] = !![];
        $[_0x2c2e('‮5a', 'KqvI')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x2c2e('‮5b', '4o1W')] = '';
        $[_0x2c2e('‮5c', '434k')] = '';
        let _0x4767d3 = ![];
        await takePostRequest('isvObfuscator');
        if (_0x41e269['KINxc']($['Token'], '')) {
            if (_0x41e269[_0x2c2e('‮5d', '8Dup')](_0x41e269[_0x2c2e('‮5e', 'HJ]P')], _0x41e269[_0x2c2e('‮5f', 'vp2K')])) {
                console['log'](_0x2c2e('‮60', 'q5Wi'));
                return;
            } else {
                res = JSON[_0x2c2e('‫61', 'ggjG')](data);
            }
        }
        await getCk();
        if (activityCookie == '') {
            console[_0x2c2e('‫62', 'p19q')](_0x2c2e('‫63', '8Dup'));
            return;
        }
        if ($[_0x2c2e('‮64', 'hGVd')] === !![]) {
            console[_0x2c2e('‮65', '8Dup')](_0x2c2e('‮66', 'Ip[2'));
            return;
        }
        if ($[_0x2c2e('‮67', 's4E[')]) {
            if (_0x41e269['CsWVA'](_0x41e269[_0x2c2e('‮68', 'q4TL')], _0x41e269['FgeaV'])) {
                console[_0x2c2e('‮69', 'q4TL')](_0x2c2e('‫6a', 'G$W('));
                return;
            } else {
                if (res['data'] && _0x41e269[_0x2c2e('‮6b', 'mHuO')](typeof res['data'][_0x2c2e('‫6c', '9GB9')], _0x41e269[_0x2c2e('‮6d', 'G$W(')])) $[_0x2c2e('‮6e', 'pL5G')] = res[_0x2c2e('‮6f', '!W2t')][_0x2c2e('‮70', 'wM4Z')];
                if (res[_0x2c2e('‮71', '5GAZ')] && typeof res[_0x2c2e('‫72', '#HP(')][_0x2c2e('‫73', 'p19q')] != _0x41e269[_0x2c2e('‫74', 'lT)R')]) $['nickname'] = res[_0x2c2e('‫75', 'nVWs')][_0x2c2e('‫76', '2ElI')];
            }
        }
        await takePostRequest(_0x2c2e('‮77', 'gggv'));
        await takePostRequest(_0x41e269['yDPYH']);
        if (!$[_0x2c2e('‮78', 'Qnpd')]) {
            if (_0x41e269[_0x2c2e('‮79', '4o1W')] !== _0x41e269[_0x2c2e('‮7a', 'mHuO')]) {
                console[_0x2c2e('‮7b', '!W2t')](_0x41e269[_0x2c2e('‮7c', 's4E[')]);
            } else {
                console[_0x2c2e('‫7d', '4o1W')](_0x41e269['Zumla']);
                return;
            }
        }
        await _0x41e269[_0x2c2e('‮7e', 'S]Iu')](takePostRequest, _0x41e269[_0x2c2e('‮7f', 'Qnpd')]);
        await _0x41e269[_0x2c2e('‮80', 'Qnpd')](takePostRequest, _0x41e269[_0x2c2e('‮81', 'KqvI')]);
        await takePostRequest(_0x41e269[_0x2c2e('‫82', 'pL5G')]);
        await $[_0x2c2e('‫83', '@7Zq')](0x3e8);
        $[_0x2c2e('‫84', '4o1W')] = [];
        await _0x41e269['waxoG'](takePostRequest, _0x41e269[_0x2c2e('‮85', '!W2t')]);
        if ($['hotFlag']) return;
        if (!$[_0x2c2e('‮86', '6f]v')]) {
            if (_0x41e269[_0x2c2e('‮87', 'HJ]P')]('FHMtT', _0x2c2e('‫88', 'ggjG'))) {
                console[_0x2c2e('‮89', '@7Zq')](_0x41e269[_0x2c2e('‫8a', '#HP(')]);
                return;
            } else {
                e = _0x41e269['OHrjV'](e, 0x20);
                let _0x99c952 = _0x41e269[_0x2c2e('‮8b', 'mHuO')], _0x326993 = _0x99c952[_0x2c2e('‫8c', 'WMJb')],
                    _0x43492f = '';
                for (i = 0x0; _0x41e269[_0x2c2e('‮8d', '2ElI')](i, e); i++) _0x43492f += _0x99c952[_0x2c2e('‮8e', 'hGVd')](Math[_0x2c2e('‫8f', 'G$W(')](_0x41e269['skNbb'](Math[_0x2c2e('‫90', '@7Zq')](), _0x326993)));
                return _0x43492f;
            }
        }
        await takePostRequest('关注');
        await $['wait'](_0x41e269[_0x2c2e('‮91', 'jmX0')](parseInt, _0x41e269[_0x2c2e('‮92', 'S]Iu')](Math[_0x2c2e('‮93', '6f]v')]() * 0x7d0, 0x7d0), 0xa));
        $[_0x2c2e('‫94', 'Qnpd')] = [0x9a637c, 0x3b9aca79, 0x3b9acd90, 0x3b9ad49d, 0x3b9ad9e1, 0x3b9ad6c3, 0x3b9adaa3, 0x3b9af2a3, 0x3ba02c88, 0x3b9acabb, 0x3b9ad444];
        $[_0x2c2e('‮95', 'RFrx')] = $[_0x2c2e('‫96', '4t9D')] == 0x3 || _0x41e269[_0x2c2e('‫97', 'jmX0')]($['openCardStatus'], 0x0) ? !![] : ![];
        if (_0x41e269[_0x2c2e('‮98', '&dMV')]($['allOpenCard'], ![])) {
            console['log'](_0x41e269[_0x2c2e('‫99', '9*T$')]);
            for (let _0x1a7af7 = 0x0; _0x1a7af7 < $['openList']['length']; _0x1a7af7++) {
                $[_0x2c2e('‫9a', 'jmX0')] = ![];
                _0x4767d3 = !![];
                $[_0x2c2e('‫9b', 'nVWs')] = '';
                $[_0x2c2e('‫9c', 'S]Iu')] = $[_0x2c2e('‫9d', 'vp2K')][_0x1a7af7];
                await _0x41e269[_0x2c2e('‮9e', '1O*#')](getshopactivityId);
                for (let _0x5e7ea4 = 0x0; _0x41e269[_0x2c2e('‫9f', '5GAZ')](_0x5e7ea4, _0x41e269['waxoG'](Array, 0x2)[_0x2c2e('‫a0', 'wM4Z')]); _0x5e7ea4++) {
                    if (_0x41e269['OydSq'](_0x41e269[_0x2c2e('‫a1', 'hGVd')], _0x41e269[_0x2c2e('‫a2', '1O*#')])) {
                        console['log'](type + '\x20' + data);
                    } else {
                        if (_0x41e269['OKXTX'](_0x5e7ea4, 0x0)) console[_0x2c2e('‫a3', '1O*#')]('第' + _0x5e7ea4 + _0x2c2e('‫a4', 'q4TL'));
                        await _0x41e269[_0x2c2e('‮a5', 'KqvI')](joinShop);
                        await $[_0x2c2e('‫a6', '1O*#')](0x3e8);
                        if (_0x41e269[_0x2c2e('‫a7', 'sxb^')]($[_0x2c2e('‫a8', 'WMJb')][_0x2c2e('‫a9', 'ggjG')](_0x41e269[_0x2c2e('‮aa', 'nVWs')]), -0x1)) {
                            break;
                        }
                    }
                }
                if ($[_0x2c2e('‫ab', '8Dup')][_0x2c2e('‮ac', 'lT)R')](_0x2c2e('‮ad', '4t9D')) > -0x1) {
                    console[_0x2c2e('‮ae', '2ElI')](_0x41e269[_0x2c2e('‮af', 'wM4Z')]);
                    allMessage += _0x2c2e('‫b0', '6f]v') + $['index'] + _0x2c2e('‫b1', '1O*#');
                } else {
                    $[_0x2c2e('‫b2', '#HP(')] = !![];
                }
                await takePostRequest(_0x41e269[_0x2c2e('‮b3', '$x#u')]);
                await $['wait'](0x3e8);
            }
        } else {
            console[_0x2c2e('‫7d', '4o1W')](_0x41e269['vRaXx']);
        }
        await _0x41e269[_0x2c2e('‫b4', 'W[rY')](takePostRequest, _0x41e269[_0x2c2e('‫b5', 'W[rY')]);
        await $['wait'](parseInt(_0x41e269['TAORa'](_0x41e269[_0x2c2e('‫b6', '4o1W')](Math[_0x2c2e('‮b7', 's4E[')](), 0x7d0), 0x7d0), 0xa));
        $['yaoqing'] = !![];
        await _0x41e269[_0x2c2e('‮b8', 'sT(K')](takePostRequest, '邀请');
        if ($[_0x2c2e('‮b9', 'RFrx')]) {
            await _0x41e269['BkfHN'](takePostRequest, '助力');
        }
        if (_0x4767d3) {
            await takePostRequest(_0x2c2e('‫ba', 'ggjG'));
        }
        await $[_0x2c2e('‮bb', '$x#u')](_0x41e269[_0x2c2e('‮bc', 'Ip[2')](parseInt, _0x41e269[_0x2c2e('‫bd', 'WMJb')](Math[_0x2c2e('‫be', 'lT)R')]() * 0x3e8, 0x7d0), 0xa));
        if ($[_0x2c2e('‮bf', 'W[rY')]) {
            console[_0x2c2e('‮c0', 'wM4Z')](_0x41e269[_0x2c2e('‫c1', '^rt[')]);
            return;
        }
        await takePostRequest(_0x2c2e('‮c2', '9GB9'));
        console[_0x2c2e('‮c3', 'q5Wi')]($['actorUuid']);
        console[_0x2c2e('‫c4', 'ggjG')]('当前助力:' + $[_0x2c2e('‫c5', '2Jn)')]);
        if (_0x41e269[_0x2c2e('‮c6', 'rWAk')]($[_0x2c2e('‮c7', 'KI5W')], 0x1)) {
            $[_0x2c2e('‮c8', 'KI5W')] = $['actorUuid'];
            console['log'](_0x2c2e('‫c9', '4t9D') + $['shareUuid']);
        }
        await $[_0x2c2e('‫ca', '4t9D')](parseInt(_0x41e269[_0x2c2e('‮cb', '6f]v')](_0x41e269[_0x2c2e('‮cc', 'q4TL')](Math[_0x2c2e('‮cd', '4t9D')](), 0x3e8), 0x1388), 0xa));
        if (_0x4767d3) await $[_0x2c2e('‫ce', '434k')](_0x41e269['SaODy'](parseInt, _0x41e269['mFmcC'](Math[_0x2c2e('‫cf', 'G$W(')](), 0x3e8) + 0x2710, 0xa));
        if (_0x41e269[_0x2c2e('‮d0', '6f]v')](_0x41e269['xBEjH']($[_0x2c2e('‫d1', '1O*#')], 0x3), 0x0)) console['log'](_0x41e269['jkZVf']);
        if (_0x41e269[_0x2c2e('‮d2', 'kvDT')]($[_0x2c2e('‫d1', '1O*#')] % 0x3, 0x0)) await $['wait'](parseInt(_0x41e269[_0x2c2e('‫d3', 'pL5G')](Math['random']() * 0x1388, 0x7530), 0xa));
    } catch (_0x593421) {
        console[_0x2c2e('‮7b', '!W2t')](_0x593421);
    }
}

async function takePostRequest(_0x4421e9) {
    var _0x3fcac4 = {
        'XRAdE': _0x2c2e('‮d4', 'pL5G'),
        'lrthe': function (_0x11af48, _0x21e733) {
            return _0x11af48 === _0x21e733;
        },
        'AJPvM': _0x2c2e('‫d5', 'sT(K'),
        'kHZqW': function (_0xa6e007, _0x460da7) {
            return _0xa6e007(_0x460da7);
        },
        'MQZXs': function (_0x529218, _0x17b27c) {
            return _0x529218 == _0x17b27c;
        },
        'ZaaBI': function (_0x509731, _0x5cf6e2) {
            return _0x509731 !== _0x5cf6e2;
        },
        'VXact': _0x2c2e('‮d6', 'q5Wi'),
        'ccLqn': function (_0x541fa7, _0x379c33, _0xaec24c) {
            return _0x541fa7(_0x379c33, _0xaec24c);
        },
        'NULtP': _0x2c2e('‫d7', '8Dup'),
        'hwUCv': _0x2c2e('‮d8', 'ggjG'),
        'WFKas': _0x2c2e('‫d9', '1O*#'),
        'vjeLQ': 'getMyPing',
        'eGslt': 'accessLogWithAD',
        'lPUTr': function (_0x1d5396, _0x2f7810) {
            return _0x1d5396(_0x2f7810);
        },
        'NMask': 'getUserInfo',
        'ftufQ': _0x2c2e('‫da', '1O*#'),
        'WGWQo': function (_0x3e850a, _0x188193) {
            return _0x3e850a(_0x188193);
        },
        'ImpWp': _0x2c2e('‫db', '9*T$'),
        'UCFVh': _0x2c2e('‮dc', 'q4TL'),
        'TybFc': function (_0x374c64, _0x43a0b1) {
            return _0x374c64(_0x43a0b1);
        },
        'vazmy': _0x2c2e('‮dd', 'G$W('),
        'sAqvO': function (_0x54b0bc, _0x107189) {
            return _0x54b0bc(_0x107189);
        },
        'oMbDm': 'friendList',
        'otKHj': function (_0x2bb340, _0x44c9f4) {
            return _0x2bb340 == _0x44c9f4;
        },
        'GPcmr': function (_0x2850d1, _0x1a3b31) {
            return _0x2850d1(_0x1a3b31);
        }
    };
    if ($[_0x2c2e('‫de', '1O*#')]) return;
    let _0xac1411 = _0x3fcac4['NULtP'];
    let _0x4f476e = '';
    let _0x26515a = _0x3fcac4[_0x2c2e('‮df', ']YNQ')];
    let _0x1e4745 = '';
    switch (_0x4421e9) {
        case _0x3fcac4['WFKas']:
            url = 'https://api.m.jd.com/client.action?functionId=isvObfuscator';
            _0x4f476e = 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=ab640b5dc76b89426f72115f5b2e06e934a5fbe9&client=apple&clientVersion=10.1.4&st=1650250640876&sv=102&sign=7ea66dcb2969eff53c43b5b8a4937dbe';
            break;
        case _0x2c2e('‮e0', 'S]Iu'):
            url = _0xac1411 + '/dz/common/getSimpleActInfoVo';
            _0x4f476e = 'activityId=' + $[_0x2c2e('‫e1', 'nVWs')];
            break;
        case _0x3fcac4[_0x2c2e('‮e2', ')F^j')]:
            url = _0xac1411 + _0x2c2e('‫e3', '&dMV');
            _0x4f476e = _0x2c2e('‫e4', '9*T$') + ($[_0x2c2e('‮e5', '&dMV')] || $['venderId'] || '') + '&token=' + $[_0x2c2e('‮e6', 'mHuO')] + _0x2c2e('‮e7', 'kvDT');
            break;
        case _0x3fcac4[_0x2c2e('‫e8', '8Dup')]:
            url = _0xac1411 + '/common/accessLogWithAD';
            let _0x457d89 = _0xac1411 + _0x2c2e('‮e9', '4t9D') + $[_0x2c2e('‫ea', 'kvDT')] + _0x2c2e('‫eb', 'rWAk') + $[_0x2c2e('‮ec', 'sT(K')];
            _0x4f476e = _0x2c2e('‫ed', '9GB9') + ($['shopId'] || $[_0x2c2e('‮ee', '9GB9')] || '') + _0x2c2e('‮ef', 'p19q') + _0x3fcac4[_0x2c2e('‫f0', 'KqvI')](encodeURIComponent, $[_0x2c2e('‮f1', 'HJ]P')]) + '&activityId=' + $['activityId'] + _0x2c2e('‮f2', '2Jn)') + encodeURIComponent(_0x457d89) + _0x2c2e('‮f3', 'gggv');
            break;
        case _0x3fcac4[_0x2c2e('‮f4', 'Ip[2')]:
            url = _0xac1411 + _0x2c2e('‮f5', '8Dup');
            _0x4f476e = _0x2c2e('‮f6', 'WMJb') + _0x3fcac4[_0x2c2e('‮f7', 'Qnpd')](encodeURIComponent, $['Pin']);
            break;
        case _0x3fcac4[_0x2c2e('‫f8', 'sxb^')]:
            url = _0xac1411 + '/dingzhi/union/cpzl/activityContent';
            _0x4f476e = _0x2c2e('‮f9', 'KqvI') + $[_0x2c2e('‮fa', 'vp2K')] + _0x2c2e('‫fb', 'kvDT') + encodeURIComponent($['Pin']) + '&pinImg=' + encodeURIComponent($['attrTouXiang']) + '&nick=' + _0x3fcac4[_0x2c2e('‫fc', '1O*#')](encodeURIComponent, $[_0x2c2e('‮fd', 'jmX0')]) + _0x2c2e('‮fe', 'KqvI') + $[_0x2c2e('‮ff', 'HJ]P')];
            break;
        case _0x3fcac4[_0x2c2e('‫100', 'pL5G')]:
            url = _0xac1411 + _0x2c2e('‮101', 'lT)R') + Date[_0x2c2e('‫102', 's4E[')]();
            _0x4f476e = _0x2c2e('‫103', '5GAZ') + $['activityId'] + _0x2c2e('‮104', 'rWAk') + _0x3fcac4[_0x2c2e('‮105', '^rt[')](encodeURIComponent, $['Pin']) + _0x2c2e('‮106', 'W[rY') + $[_0x2c2e('‮107', 'lT)R')];
            break;
        case _0x3fcac4[_0x2c2e('‫108', '2ElI')]:
            url = _0xac1411 + _0x2c2e('‮109', '!W2t') + Date['now']();
            _0x4f476e = _0x2c2e('‫10a', 'W[rY') + $[_0x2c2e('‫10b', '4o1W')] + _0x2c2e('‮10c', '4o1W') + _0x3fcac4[_0x2c2e('‫10d', 'wM4Z')](encodeURIComponent, $['Pin']) + '&uid=' + $[_0x2c2e('‫10e', '1^ku')];
            break;
        case _0x3fcac4['vazmy']:
            url = _0xac1411 + _0x2c2e('‫10f', '5GAZ') + Date[_0x2c2e('‫110', 'wM4Z')]();
            _0x4f476e = _0x2c2e('‮111', ']YNQ') + $['actorUuid'] + _0x2c2e('‫112', 'mHuO') + $[_0x2c2e('‮113', 'Cok4')] + _0x2c2e('‮114', 'Ip[2') + encodeURIComponent($['Pin']);
            break;
        case'关注':
            url = _0xac1411 + _0x2c2e('‮115', '9*T$') + Date[_0x2c2e('‮116', 'Svbj')]();
            _0x4f476e = _0x2c2e('‮117', '8Dup') + $[_0x2c2e('‫118', 'WMJb')] + '&pin=' + _0x3fcac4[_0x2c2e('‮119', 'Svbj')](encodeURIComponent, $[_0x2c2e('‫11a', 'ggjG')]) + _0x2c2e('‮11b', 'Ip[2') + $[_0x2c2e('‮11c', 'RFrx')];
            break;
        case _0x3fcac4[_0x2c2e('‫11d', 'G$W(')]:
            url = _0xac1411 + _0x2c2e('‫11e', 'RFrx') + Date[_0x2c2e('‮11f', 'sT(K')]();
            _0x4f476e = _0x2c2e('‫120', '9*T$') + $['actorUuid'] + _0x2c2e('‮121', '434k') + $[_0x2c2e('‮113', 'Cok4')] + _0x2c2e('‫122', 'HJ]P') + _0x3fcac4[_0x2c2e('‮123', 'p19q')](encodeURIComponent, $[_0x2c2e('‮124', 'vp2K')]) + _0x2c2e('‮125', 'hGVd');
            break;
        case _0x2c2e('‮126', 'HJ]P'):
            url = _0xac1411 + _0x2c2e('‫127', 'sxb^') + Date[_0x2c2e('‮128', 'RFrx')]();
            _0x4f476e = 'uid=' + $[_0x2c2e('‮129', 'wM4Z')] + '&activityId=' + $['activityId'] + _0x2c2e('‫12a', '8Dup') + encodeURIComponent($['Pin']);
            break;
        case'邀请':
        case'助力':
            if (_0x3fcac4['otKHj'](_0x4421e9, '助力')) {
                url = _0xac1411 + _0x2c2e('‮12b', 'Qnpd') + Date['now']();
            }
            _0x4f476e = _0x2c2e('‫12c', 'Svbj') + $[_0x2c2e('‫ea', 'kvDT')] + '&pin='
                + _0x3fcac4[_0x2c2e('‮12d', '6f]v')](encodeURIComponent, $[_0x2c2e('‫12e', 'S]Iu')]) + '&shareUuid=29666c804272423da39003a2382550e8';
            break;
        default:
            console[_0x2c2e('‫131', '2Jn)')]('错误' + _0x4421e9);
    }
    await $[_0x2c2e('‫ce', '434k')](0x1f4);
    let _0x4a54a3 = getPostRequest(url, _0x4f476e, _0x26515a);
    return new Promise(async _0x2fbc6e => {
        var _0x131eec = {
            'YjZlP': _0x3fcac4['XRAdE'],
            'JbcoM': function (_0x3e355e, _0x4ee19e) {
                return _0x3fcac4[_0x2c2e('‫132', 'WMJb')](_0x3e355e, _0x4ee19e);
            },
            'EeKGh': _0x2c2e('‫133', '6f]v'),
            'ICRkj': _0x3fcac4[_0x2c2e('‫134', '434k')],
            'CHNVa': function (_0x5e5956, _0x52064c) {
                return _0x3fcac4[_0x2c2e('‫135', '8Dup')](_0x5e5956, _0x52064c);
            },
            'ePVoV': function (_0x54c7de, _0x59d746) {
                return _0x54c7de != _0x59d746;
            },
            'ZwqjB': _0x2c2e('‫136', '1^ku'),
            'xQuMs': function (_0x25c8ba, _0x4db6d6) {
                return _0x3fcac4[_0x2c2e('‫137', '5GAZ')](_0x25c8ba, _0x4db6d6);
            },
            'IfmGe': function (_0x28705a, _0xde1f5f) {
                return _0x3fcac4[_0x2c2e('‮138', 'jmX0')](_0x28705a, _0xde1f5f);
            },
            'JuwnD': _0x3fcac4[_0x2c2e('‮139', 'lT)R')],
            'CjAVd': function (_0x2ecbf6, _0x2b2d96, _0x5c0747) {
                return _0x3fcac4[_0x2c2e('‮13a', '5GAZ')](_0x2ecbf6, _0x2b2d96, _0x5c0747);
            },
            'UQzJX': function (_0xecddf7) {
                return _0xecddf7();
            }
        };
        $['post'](_0x4a54a3, (_0x7f4361, _0x4ff0cc, _0x5ed95b) => {
            var _0x4b0ff4 = {
                'xaSuz': function (_0x18a917) {
                    return _0x18a917();
                }
            };
            if (_0x2c2e('‫13b', ')F^j') !== _0x131eec[_0x2c2e('‮13c', 'mHuO')]) {
                try {
                    if (_0x131eec[_0x2c2e('‫13d', 'sT(K')](_0x131eec['EeKGh'], _0x131eec[_0x2c2e('‫13e', 'pL5G')])) {
                        console[_0x2c2e('‮13f', 'S]Iu')](_0x4421e9 + '\x20' + (res[_0x2c2e('‫140', 'q5Wi')] || ''));
                    } else {
                        _0x131eec[_0x2c2e('‫141', '4t9D')](setActivityCookie, _0x4ff0cc);
                        if (_0x7f4361) {
                            if (_0x4ff0cc && _0x131eec[_0x2c2e('‮142', ')F^j')](typeof _0x4ff0cc['statusCode'], _0x131eec['ZwqjB'])) {
                                if (_0x131eec['xQuMs'](_0x4ff0cc[_0x2c2e('‫143', 'KI5W')], 0x1ed)) {
                                    if (_0x131eec['IfmGe']('fBOQZ', _0x131eec[_0x2c2e('‮144', 'p19q')])) {
                                        console[_0x2c2e('‫62', 'p19q')](_0x2c2e('‫145', 'wM4Z'));
                                        $['outFlag'] = !![];
                                    } else {
                                        _0x4b0ff4[_0x2c2e('‮146', 'KqvI')](_0x2fbc6e);
                                    }
                                }
                            }
                            console[_0x2c2e('‫147', '5GAZ')]('' + $[_0x2c2e('‫148', '434k')](_0x7f4361, _0x7f4361));
                            console[_0x2c2e('‫149', 'sxb^')](_0x4421e9 + _0x2c2e('‫14a', 'wM4Z'));
                        } else {
                            _0x131eec[_0x2c2e('‫14b', 'W[rY')](dealReturn, _0x4421e9, _0x5ed95b);
                        }
                    }
                } catch (_0x48a162) {
                    console[_0x2c2e('‮14c', 'sT(K')](_0x48a162, _0x4ff0cc);
                } finally {
                    _0x131eec[_0x2c2e('‮14d', '2ElI')](_0x2fbc6e);
                }
            } else {
                console[_0x2c2e('‫c4', 'ggjG')](_0x4421e9 + '\x20' + _0x5ed95b);
            }
        });
    });
}

async function dealReturn(_0x388ca3, _0xea661a) {
    var _0x4d6f96 = {
        'LzdXV': _0x2c2e('‮14e', 'hGVd'),
        'qrHaK': _0x2c2e('‮14f', 'Ip[2'),
        'sVbFk': _0x2c2e('‫150', 'q4TL'),
        'sbcAl': _0x2c2e('‮151', 'sT(K'),
        'eNXBy': function (_0x31d114, _0x24d974) {
            return _0x31d114 > _0x24d974;
        },
        'dwldX': _0x2c2e('‫152', 'Svbj'),
        'lYFjQ': _0x2c2e('‮153', '6f]v'),
        'Vemhb': function (_0x548a4c, _0x29edc3) {
            return _0x548a4c && _0x29edc3;
        },
        'gQOUb': function (_0x5b01ea, _0x103b88) {
            return _0x5b01ea + _0x103b88;
        },
        'xstzv': _0x2c2e('‮154', 'HJ]P'),
        'IcQUD': function (_0x3f3f2c, _0x2c9dc0) {
            return _0x3f3f2c == _0x2c9dc0;
        },
        'ZgBaA': 'object',
        'tspji': function (_0x325d6e, _0x50cb78) {
            return _0x325d6e > _0x50cb78;
        },
        'CqDIV': _0x2c2e('‫155', 'jmX0'),
        'hBKyk': function (_0x34d97d, _0x5986d5) {
            return _0x34d97d + _0x5986d5;
        },
        'HDxnp': _0x2c2e('‮156', 'vp2K'),
        'OlIGT': function (_0x463138, _0x340860) {
            return _0x463138 > _0x340860;
        },
        'qNaqf': function (_0x40283d, _0x54a053) {
            return _0x40283d + _0x54a053;
        },
        'UEnQG': function (_0x4466fb, _0xb5bc3b) {
            return _0x4466fb > _0xb5bc3b;
        },
        'niNYr': 'undefined',
        'rnphn': function (_0x47b25a, _0x4c7a7f) {
            return _0x47b25a != _0x4c7a7f;
        },
        'KKebV': function (_0x2ad0ac, _0xae60f7) {
            return _0x2ad0ac === _0xae60f7;
        },
        'KYoJc': _0x2c2e('‫157', 'Ip[2'),
        'LssIG': 'drawContent',
        'nePQQ': function (_0x3e73ed, _0x5eeea1) {
            return _0x3e73ed !== _0x5eeea1;
        },
        'Pbqmg': 'isvObfuscator',
        'ReNbX': function (_0x1abbbd, _0x3f2919) {
            return _0x1abbbd == _0x3f2919;
        },
        'SekhN': function (_0xdaa3d2, _0x220c63) {
            return _0xdaa3d2 != _0x220c63;
        },
        'XUGcd': 'getSimpleActInfoVo',
        'khMzF': 'rwgjS',
        'xgNMC': function (_0x3ff104, _0x14e639) {
            return _0x3ff104 != _0x14e639;
        },
        'YIpIB': function (_0x3acee9, _0x460d44) {
            return _0x3acee9 === _0x460d44;
        },
        'ENdKp': _0x2c2e('‫158', '9*T$'),
        'DbSRt': _0x2c2e('‫159', 'ggjG'),
        'ZZDrJ': function (_0x4b3819, _0x794745) {
            return _0x4b3819 === _0x794745;
        },
        'McECu': function (_0x44da0a, _0x56d430) {
            return _0x44da0a != _0x56d430;
        },
        'HVMez': function (_0x3e27e1, _0x514b7e) {
            return _0x3e27e1 !== _0x514b7e;
        },
        'YQZYs': _0x2c2e('‫15a', 'sT(K'),
        'UlYjy': _0x2c2e('‫15b', '2ElI'),
        'Iohqm': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'uwkul': _0x2c2e('‫15c', 'q4TL'),
        'WJQzE': function (_0x4caed4, _0x1831e7) {
            return _0x4caed4 == _0x1831e7;
        },
        'KoEdy': function (_0x3f3fb1, _0x5ad097) {
            return _0x3f3fb1 !== _0x5ad097;
        },
        'WZIbB': _0x2c2e('‫15d', 'Svbj'),
        'VjANf': _0x2c2e('‮15e', 'wM4Z'),
        'ovivN': 'RXnXK',
        'AoEPt': 'getOpenCardList',
        'ShJSn': 'OxJhs',
        'wMmly': _0x2c2e('‮15f', '2ElI'),
        'qPGvA': function (_0x442d2b, _0x51fbc4) {
            return _0x442d2b === _0x51fbc4;
        },
        'crIoJ': 'UlEMi',
        'WaDmQ': _0x2c2e('‫160', '5GAZ'),
        'ZYOpE': _0x2c2e('‫161', 'ggjG'),
        'dfLLc': _0x2c2e('‮162', 'sT(K'),
        'pcyWp': 'visitSku',
        'ftGEL': _0x2c2e('‫163', '9GB9'),
        'XgOGX': 'toShop',
        'ysDgx': _0x2c2e('‮164', '9*T$'),
        'fHZRc': _0x2c2e('‫165', '9*T$'),
        'YsWLK': _0x2c2e('‫166', 'Cok4'),
        'dNGfx': function (_0xfce0c9, _0x2a0301) {
            return _0xfce0c9 !== _0x2a0301;
        },
        'EIdul': _0x2c2e('‫167', 'sT(K'),
        'VtVBw': function (_0x229964, _0x5d054f) {
            return _0x229964 === _0x5d054f;
        },
        'llskG': 'sviIz',
        'HGPkp': _0x2c2e('‫168', '@7Zq'),
        'nZuhP': _0x2c2e('‮169', 'sxb^'),
        'zoicf': function (_0x302bbc, _0x1ae838) {
            return _0x302bbc > _0x1ae838;
        },
        'zzClg': function (_0x4b75e4, _0x211463) {
            return _0x4b75e4 === _0x211463;
        },
        'aJwJP': _0x2c2e('‮16a', '!W2t')
    };
    let _0x437f3b = '';
    try {
        if (_0x4d6f96['KKebV'](_0x2c2e('‫16b', 'wM4Z'), _0x4d6f96[_0x2c2e('‮16c', 'kvDT')])) {
            if (_0x4d6f96[_0x2c2e('‫16d', 'rWAk')](_0x388ca3, _0x2c2e('‮16e', '4t9D')) || _0x388ca3 != _0x4d6f96['LssIG']) {
                if (_0x4d6f96[_0x2c2e('‫16f', '1^ku')](_0x2c2e('‮170', 's4E['), _0x2c2e('‮171', 'KI5W'))) {
                    $['hotFlag'] = !![];
                } else {
                    if (_0xea661a) {
                        _0x437f3b = JSON[_0x2c2e('‫172', 'vp2K')](_0xea661a);
                    }
                }
            }
        } else {
            let _0x7296e = {
                'Accept': _0x4d6f96[_0x2c2e('‫173', 'wM4Z')],
                'Accept-Encoding': 'gzip,\x20deflate,\x20br',
                'Accept-Language': _0x4d6f96[_0x2c2e('‮174', 'wM4Z')],
                'Connection': _0x4d6f96[_0x2c2e('‮175', 'lT)R')],
                'Content-Type': _0x4d6f96[_0x2c2e('‫176', 'q4TL')],
                'Cookie': cookie,
                'User-Agent': $['UA'],
                'X-Requested-With': _0x2c2e('‫177', '9GB9')
            };
            if (_0x4d6f96[_0x2c2e('‫178', 'mHuO')](url[_0x2c2e('‫179', ')F^j')](_0x4d6f96[_0x2c2e('‮17a', 'q5Wi')]), -0x1)) {
                _0x7296e[_0x4d6f96['lYFjQ']] = _0x2c2e('‫17b', '4o1W') + $[_0x2c2e('‮17c', 'p19q')] + '&shareUuid=' + $['shareUuid'];
                _0x7296e['Cookie'] = '' + (_0x4d6f96[_0x2c2e('‫17d', '^rt[')](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($[_0x2c2e('‫17e', 'q5Wi')] && _0x4d6f96[_0x2c2e('‫17f', 'Cok4')](_0x4d6f96['gQOUb'](_0x4d6f96['xstzv'], $[_0x2c2e('‫11a', 'ggjG')]), ';') || '') + activityCookie;
            }
            return {'url': url, 'method': method, 'headers': _0x7296e, 'body': body, 'timeout': 0x7530};
        }
    } catch (_0x927327) {
        console[_0x2c2e('‫180', 'HJ]P')](_0x388ca3 + _0x2c2e('‮181', 'hGVd'));
        $[_0x2c2e('‮182', 'Cok4')] = ![];
    }
    try {
        switch (_0x388ca3) {
            case _0x4d6f96[_0x2c2e('‮183', 'jmX0')]:
                if (_0x4d6f96['IcQUD'](typeof _0x437f3b, _0x4d6f96[_0x2c2e('‮184', 'mHuO')])) {
                    if (_0x4d6f96[_0x2c2e('‫185', 'G$W(')](_0x437f3b[_0x2c2e('‮186', '4t9D')], 0x0)) {
                        if (_0x4d6f96['SekhN'](typeof _0x437f3b[_0x2c2e('‮187', '434k')], _0x4d6f96['niNYr'])) $['Token'] = _0x437f3b[_0x2c2e('‫188', 'sxb^')];
                    } else if (_0x437f3b['message']) {
                        console['log'](_0x2c2e('‫189', 'RFrx') + (_0x437f3b[_0x2c2e('‫18a', 'sT(K')] || ''));
                    } else {
                        console['log'](_0xea661a);
                    }
                } else {
                    console['log'](_0xea661a);
                }
                break;
            case _0x4d6f96['XUGcd']:
                if (_0x4d6f96['ReNbX'](typeof _0x437f3b, 'object')) {
                    if (_0x437f3b[_0x2c2e('‫18b', '$x#u')] && _0x437f3b[_0x2c2e('‮18c', 'wM4Z')] === !![]) {
                        if (_0x4d6f96['nePQQ'](_0x2c2e('‮18d', 's4E['), _0x4d6f96[_0x2c2e('‫18e', 'S]Iu')])) {
                            _0xea661a = _0xea661a && _0xea661a['match'](/jsonp_.*?\((.*?)\);/) && _0xea661a['match'](/jsonp_.*?\((.*?)\);/)[0x1] || _0xea661a;
                            let _0xc748db = $[_0x2c2e('‫18f', '4t9D')](_0xea661a, _0xea661a);
                            if (_0xc748db && _0x4d6f96['IcQUD'](typeof _0xc748db, _0x4d6f96[_0x2c2e('‫190', '2Jn)')])) {
                                if (_0xc748db && _0xc748db[_0x2c2e('‫191', 'nVWs')] == !![]) {
                                    console['log'](_0x2c2e('‮192', 'WMJb') + (_0xc748db['result'][_0x2c2e('‮193', 'sT(K')]['venderCardName'] || ''));
                                    $[_0x2c2e('‫194', '4o1W')] = _0xc748db[_0x2c2e('‮195', '4o1W')]['interestsRuleList'] && _0xc748db[_0x2c2e('‮196', '1O*#')]['interestsRuleList'][0x0] && _0xc748db['result'][_0x2c2e('‫197', 'vp2K')][0x0][_0x2c2e('‫198', 'wM4Z')] && _0xc748db[_0x2c2e('‫199', 'S]Iu')][_0x2c2e('‮19a', '1O*#')][0x0]['interestsInfo'][_0x2c2e('‫19b', '2ElI')] || '';
                                }
                            } else {
                                console['log'](_0xea661a);
                            }
                        } else {
                            if (_0x4d6f96['xgNMC'](typeof _0x437f3b[_0x2c2e('‫72', '#HP(')]['shopId'], _0x2c2e('‮19c', 'q5Wi'))) $[_0x2c2e('‮19d', ']YNQ')] = _0x437f3b[_0x2c2e('‫19e', '1O*#')][_0x2c2e('‫19f', ')F^j')];
                            if (typeof _0x437f3b[_0x2c2e('‫1a0', '^rt[')][_0x2c2e('‮1a1', '4t9D')] != _0x4d6f96[_0x2c2e('‫1a2', 'Cok4')]) $[_0x2c2e('‫1a3', ']YNQ')] = _0x437f3b[_0x2c2e('‫1a0', '^rt[')][_0x2c2e('‫1a4', 'ggjG')];
                        }
                    } else if (_0x437f3b[_0x2c2e('‫1a5', '8Dup')]) {
                        console['log'](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‮1a6', 's4E[')] || ''));
                    } else {
                        console[_0x2c2e('‫a3', '1O*#')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if (_0x4d6f96['YIpIB'](_0x4d6f96[_0x2c2e('‫1a7', 'Ip[2')], _0x4d6f96['ENdKp'])) {
                        console[_0x2c2e('‮c3', 'q5Wi')](_0x388ca3 + '\x20' + _0xea661a);
                    } else {
                        if (_0x437f3b['errorMessage']) {
                            if (_0x437f3b[_0x2c2e('‮1a8', 'pL5G')][_0x2c2e('‫1a9', '434k')]('火爆') > -0x1) {
                                $[_0x2c2e('‫1aa', 'kvDT')] = !![];
                            }
                        }
                    }
                }
                break;
            case _0x4d6f96[_0x2c2e('‮1ab', 'G$W(')]:
                if (_0x4d6f96['ReNbX'](typeof _0x437f3b, _0x4d6f96['ZgBaA'])) {
                    if (_0x437f3b['result'] && _0x4d6f96['ZZDrJ'](_0x437f3b[_0x2c2e('‮18c', 'wM4Z')], !![])) {
                        if (_0x437f3b['data'] && typeof _0x437f3b[_0x2c2e('‮1ac', '6f]v')][_0x2c2e('‮1ad', 'p19q')] != _0x2c2e('‫1ae', '@7Zq')) $[_0x2c2e('‫17e', 'q5Wi')] = _0x437f3b[_0x2c2e('‫1af', '434k')][_0x2c2e('‫1b0', '^rt[')];
                        if (_0x437f3b[_0x2c2e('‫1b1', '2Jn)')] && _0x4d6f96['McECu'](typeof _0x437f3b[_0x2c2e('‫1b2', 'G$W(')]['nickname'], _0x4d6f96[_0x2c2e('‫1b3', '8Dup')])) $[_0x2c2e('‫1b4', 'Ip[2')] = _0x437f3b[_0x2c2e('‫1b5', 'rWAk')][_0x2c2e('‮1b6', 'KqvI')];
                    } else if (_0x437f3b[_0x2c2e('‫1b7', 'S]Iu')]) {
                        console[_0x2c2e('‫31', 'Qnpd')](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‫1b8', 'Ip[2')] || ''));
                    } else {
                        console[_0x2c2e('‫31', 'Qnpd')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if (_0x4d6f96[_0x2c2e('‫1b9', ']YNQ')]('pSzCT', _0x4d6f96['YQZYs'])) {
                        console[_0x2c2e('‮69', 'q4TL')](_0x388ca3 + '\x20' + _0xea661a);
                    } else {
                        $[_0x2c2e('‫1ba', '1O*#')] = _0x437f3b['data'][_0x2c2e('‮1bb', 'wM4Z')] || 0x0;
                        $[_0x2c2e('‫1bc', 'RFrx')] = _0x437f3b['data']['score'] || 0x0;
                    }
                }
                break;
            case _0x4d6f96['UlYjy']:
                if (_0x4d6f96[_0x2c2e('‫1bd', ')F^j')](typeof _0x437f3b, _0x2c2e('‫1be', 'q5Wi'))) {
                    if (_0x437f3b[_0x2c2e('‮1bf', 'W[rY')] && _0x437f3b[_0x2c2e('‮1c0', 'ggjG')] === !![]) {
                        if (_0x437f3b[_0x2c2e('‫1c1', '$x#u')] && typeof _0x437f3b[_0x2c2e('‮1c2', 'q5Wi')][_0x2c2e('‮1c3', '9GB9')] != _0x2c2e('‫1c4', 'KI5W')) $[_0x2c2e('‫1c5', 'kvDT')] = _0x437f3b['data'][_0x2c2e('‫1c6', 'jmX0')] || _0x4d6f96['Iohqm'];
                    } else if (_0x437f3b[_0x2c2e('‫1a5', '8Dup')]) {
                        console['log'](_0x388ca3 + '\x20' + (_0x437f3b['errorMessage'] || ''));
                    } else {
                        console[_0x2c2e('‫a3', '1O*#')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if ('zOOSU' === _0x2c2e('‮1c7', '1^ku')) {
                        console[_0x2c2e('‮89', '@7Zq')](_0x388ca3 + '\x20' + _0xea661a);
                    } else {
                        console[_0x2c2e('‮1c8', 'lT)R')](_0x2c2e('‫1c9', 's4E['));
                        return;
                    }
                }
                break;
            case _0x4d6f96['uwkul']:
                if (_0x4d6f96[_0x2c2e('‮1ca', 'RFrx')](typeof _0x437f3b, 'object')) {
                    if (_0x437f3b['result'] && _0x4d6f96[_0x2c2e('‮1cb', 'gggv')](_0x437f3b[_0x2c2e('‫1cc', 'RFrx')], !![])) {
                        $[_0x2c2e('‮1cd', 'ggjG')] = _0x437f3b[_0x2c2e('‫1ce', 'Cok4')]['friendNum'];
                        console['log'](_0x2c2e('‫1cf', '8Dup') + $['friendNum'] + '\x20人');
                    } else if (_0x437f3b[_0x2c2e('‮1d0', '!W2t')]) {
                        console['log'](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‫1b7', 'S]Iu')] || ''));
                    } else {
                        console[_0x2c2e('‮ae', '2ElI')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if (_0x4d6f96['KoEdy'](_0x2c2e('‮1d1', 'wM4Z'), _0x4d6f96[_0x2c2e('‮1d2', '4o1W')])) {
                        if (_0x4d6f96['tspji'](_0x437f3b['errorMessage'][_0x2c2e('‮1d3', 'W[rY')]('火爆'), -0x1)) {
                            $[_0x2c2e('‫1d4', '@7Zq')] = !![];
                        }
                    } else {
                        console[_0x2c2e('‫1d5', '&dMV')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                }
                break;
            case _0x4d6f96['VjANf']:
                if (_0x4d6f96[_0x2c2e('‫1d6', 'sxb^')](typeof _0x437f3b, _0x4d6f96[_0x2c2e('‮1d7', '4t9D')])) {
                    if (_0x437f3b[_0x2c2e('‫1d8', 'gggv')] && _0x437f3b[_0x2c2e('‮1d9', '2ElI')] === !![]) {
                        $[_0x2c2e('‮1da', 'KI5W')] = _0x437f3b[_0x2c2e('‫1db', 'HJ]P')][_0x2c2e('‮1dc', 'Svbj')] || 0x0;
                        $[_0x2c2e('‫1dd', '5GAZ')] = _0x437f3b[_0x2c2e('‮6f', '!W2t')][_0x2c2e('‫1de', 'WMJb')] || 0x0;
                    } else if (_0x437f3b['errorMessage']) {
                        console[_0x2c2e('‫1df', 'nVWs')](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‮1e0', 'KqvI')] || ''));
                    } else {
                        console[_0x2c2e('‮c0', 'wM4Z')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if (_0x4d6f96['ZZDrJ']('RhKiS', _0x4d6f96[_0x2c2e('‫1e1', 'rWAk')])) {
                        let _0x50fd1f = ck[_0x2c2e('‫1e2', 'Ip[2')](';')[0x0][_0x2c2e('‮1e3', 'G$W(')]();
                        if (_0x50fd1f[_0x2c2e('‮1e4', 'S]Iu')]('=')[0x1]) {
                            if (_0x4d6f96[_0x2c2e('‮1e5', 'G$W(')](_0x50fd1f[_0x2c2e('‫1e6', '8Dup')](_0x4d6f96['CqDIV']), -0x1)) LZ_TOKEN_KEY = _0x4d6f96[_0x2c2e('‮1e7', '5GAZ')](_0x50fd1f['replace'](/ /g, ''), ';');
                            if (_0x50fd1f[_0x2c2e('‮1e8', 's4E[')](_0x2c2e('‮1e9', '8Dup')) > -0x1) LZ_TOKEN_VALUE = _0x4d6f96['hBKyk'](_0x50fd1f['replace'](/ /g, ''), ';');
                            if (_0x4d6f96[_0x2c2e('‫1ea', '^rt[')](_0x50fd1f['indexOf'](_0x4d6f96[_0x2c2e('‮1eb', 'p19q')]), -0x1)) lz_jdpin_token = _0x4d6f96['hBKyk']('' + _0x50fd1f['replace'](/ /g, ''), ';');
                        }
                    } else {
                        console['log'](_0x388ca3 + '\x20' + _0xea661a);
                    }
                }
                break;
            case _0x4d6f96['AoEPt']:
                if (_0x4d6f96['WJQzE'](typeof _0x437f3b, _0x2c2e('‫1ec', '@7Zq'))) {
                    if (_0x437f3b['result'] && _0x4d6f96[_0x2c2e('‫1ed', 'G$W(')](_0x437f3b['result'], !![])) {
                        $[_0x2c2e('‮1ee', 'G$W(')] = _0x437f3b[_0x2c2e('‫1ef', 'WMJb')] || [];
                    } else if (_0x437f3b[_0x2c2e('‫140', 'q5Wi')]) {
                        console[_0x2c2e('‮13f', 'S]Iu')](_0x388ca3 + '\x20' + (_0x437f3b['errorMessage'] || ''));
                    } else {
                        console['log'](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if (_0x2c2e('‮1f0', 'WMJb') !== _0x4d6f96['ShJSn']) {
                        if (_0x4d6f96[_0x2c2e('‮1f1', '2ElI')](name['indexOf'](_0x4d6f96['CqDIV']), -0x1)) LZ_TOKEN_KEY = _0x4d6f96[_0x2c2e('‫1f2', 'nVWs')](name['replace'](/ /g, ''), ';');
                        if (name[_0x2c2e('‮1f3', 'sxb^')](_0x2c2e('‫1f4', '434k')) > -0x1) LZ_TOKEN_VALUE = _0x4d6f96[_0x2c2e('‮1f5', 'KI5W')](name[_0x2c2e('‮1f6', 'Svbj')](/ /g, ''), ';');
                        if (_0x4d6f96['UEnQG'](name[_0x2c2e('‮1f7', 'RFrx')]('lz_jdpin_token='), -0x1)) lz_jdpin_token = _0x4d6f96[_0x2c2e('‫1f8', '^rt[')](_0x4d6f96['qNaqf']('', name[_0x2c2e('‫1f9', 'KqvI')](/ /g, '')), ';');
                    } else {
                        console[_0x2c2e('‮1fa', '$x#u')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                }
                break;
            case _0x4d6f96[_0x2c2e('‫1fb', 'KI5W')]:
                if (_0x4d6f96[_0x2c2e('‫1fc', 'ggjG')](typeof _0x437f3b, _0x4d6f96[_0x2c2e('‫1fd', 'WMJb')])) {
                    if (_0x4d6f96[_0x2c2e('‮1fe', '2ElI')](_0x4d6f96[_0x2c2e('‮1ff', 'G$W(')], _0x4d6f96[_0x2c2e('‮200', 'wM4Z')])) {
                        console[_0x2c2e('‫201', 'RFrx')](_0x2c2e('‮202', 'hGVd') + (_0x437f3b[_0x2c2e('‫203', '6f]v')] || ''));
                    } else {
                        if (_0x437f3b['result'] && _0x4d6f96[_0x2c2e('‫204', 's4E[')](_0x437f3b['result'], !![])) {
                            $[_0x2c2e('‫205', 'sT(K')] = _0x437f3b[_0x2c2e('‮206', 'sT(K')]['uid'] || '';
                            $['followShop'] = _0x437f3b['data'][_0x2c2e('‫207', 'S]Iu')] || 0x0;
                            $[_0x2c2e('‮208', '@7Zq')] = _0x437f3b[_0x2c2e('‮209', 'q4TL')]['isGameEnd'] || ![];
                            $[_0x2c2e('‫20a', 'gggv')] = _0x437f3b[_0x2c2e('‮20b', 'S]Iu')]['newVip'] || ![];
                            $['openCardStatus'] = _0x437f3b[_0x2c2e('‮20c', 'pL5G')][_0x2c2e('‫20d', '2Jn)')] || 0x0;
                            $[_0x2c2e('‫20e', 'RFrx')] = _0x437f3b['data'][_0x2c2e('‮20f', 'KI5W')] || 0x0;
                        } else if (_0x437f3b['errorMessage']) {
                            console[_0x2c2e('‫210', 'G$W(')](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‮211', '2ElI')] || ''));
                        } else {
                            console['log'](_0x388ca3 + '\x20' + _0xea661a);
                        }
                    }
                } else {
                    if (_0x4d6f96[_0x2c2e('‫212', '4o1W')](_0x2c2e('‮213', 'KqvI'), _0x2c2e('‫214', 'RFrx'))) {
                        if (_0x437f3b[_0x2c2e('‫215', '8Dup')] && _0x437f3b[_0x2c2e('‮216', '^rt[')] === !![]) {
                            if (typeof _0x437f3b[_0x2c2e('‫217', 'RFrx')][_0x2c2e('‮218', 'Ip[2')] != _0x4d6f96[_0x2c2e('‫219', 'rWAk')]) $[_0x2c2e('‫21a', 'lT)R')] = _0x437f3b[_0x2c2e('‫21b', 'sxb^')]['shopId'];
                            if (_0x4d6f96['rnphn'](typeof _0x437f3b[_0x2c2e('‫21c', '@7Zq')][_0x2c2e('‫21d', 'pL5G')], _0x4d6f96['niNYr'])) $['venderId'] = _0x437f3b[_0x2c2e('‫21e', ']YNQ')][_0x2c2e('‫21f', '5GAZ')];
                        } else if (_0x437f3b[_0x2c2e('‫220', '&dMV')]) {
                            console[_0x2c2e('‫221', '6f]v')](_0x388ca3 + '\x20' + (_0x437f3b['errorMessage'] || ''));
                        } else {
                            console[_0x2c2e('‮222', 'vp2K')](_0x388ca3 + '\x20' + _0xea661a);
                        }
                    } else {
                        console[_0x2c2e('‮223', 'Cok4')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                }
                break;
            case _0x4d6f96['ZYOpE']:
            case _0x4d6f96[_0x2c2e('‮224', '4t9D')]:
            case _0x4d6f96[_0x2c2e('‫225', '9GB9')]:
            case _0x4d6f96['ftGEL']:
            case _0x4d6f96['XgOGX']:
            case _0x4d6f96[_0x2c2e('‮226', '&dMV')]:
            case _0x2c2e('‮227', '&dMV'):
            case _0x4d6f96[_0x2c2e('‮228', 'hGVd')]:
            case _0x4d6f96['YsWLK']:
                if (_0x4d6f96[_0x2c2e('‫229', 'pL5G')](typeof _0x437f3b, _0x4d6f96[_0x2c2e('‫22a', 'vp2K')])) {
                    if (_0x437f3b[_0x2c2e('‫22b', 'mHuO')] && _0x4d6f96['qPGvA'](_0x437f3b['result'], !![])) {
                        console['log'](_0x388ca3 + '\x20' + _0xea661a);
                    } else if (_0x437f3b['errorMessage']) {
                        console['log'](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‫22c', '6f]v')] || ''));
                    } else {
                        console[_0x2c2e('‫22d', 'mHuO')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                } else {
                    if (_0x4d6f96[_0x2c2e('‫22e', '$x#u')](_0x4d6f96['EIdul'], 'BYTSZ')) {
                        console[_0x2c2e('‫22f', '434k')](_0x388ca3 + '\x20' + _0xea661a);
                    } else {
                        console[_0x2c2e('‫180', 'HJ]P')](_0x388ca3 + '\x20' + _0xea661a);
                    }
                }
                break;
            case'邀请':
                break;
            case'助力':
                if (_0x4d6f96['WJQzE'](typeof _0x437f3b, _0x2c2e('‫230', 's4E['))) {
                    if (_0x437f3b[_0x2c2e('‫231', 'KI5W')] && _0x4d6f96[_0x2c2e('‮232', 'vp2K')](_0x437f3b['result'], !![])) {
                        if (_0x4d6f96[_0x2c2e('‮233', 'kvDT')] === _0x2c2e('‫234', 'HJ]P')) {
                            console['log'](_0x388ca3 + '\x20' + _0xea661a);
                        } else {
                            if (_0x437f3b[_0x2c2e('‮196', '1O*#')] && _0x437f3b[_0x2c2e('‮235', 'HJ]P')] === !![]) {
                                $[_0x2c2e('‫236', '434k')] = _0x437f3b['data'] || [];
                            } else if (_0x437f3b[_0x2c2e('‮237', '^rt[')]) {
                                console['log'](_0x388ca3 + '\x20' + (_0x437f3b['errorMessage'] || ''));
                            } else {
                                console[_0x2c2e('‮13f', 'S]Iu')](_0x388ca3 + '\x20' + _0xea661a);
                            }
                        }
                    } else if (_0x437f3b[_0x2c2e('‮238', 'RFrx')]) {
                        console['log'](_0x388ca3 + '\x20' + (_0x437f3b[_0x2c2e('‫239', 'lT)R')] || ''));
                    } else {
                        if (_0x4d6f96[_0x2c2e('‫23a', 'rWAk')](_0x4d6f96[_0x2c2e('‫23b', '2Jn)')], _0x4d6f96[_0x2c2e('‮23c', 'rWAk')])) {
                            console['log'](_0x388ca3 + '\x20' + _0xea661a);
                        } else {
                            console['log'](_0x388ca3 + '\x20' + _0xea661a);
                        }
                    }
                } else {
                    console['log'](_0x388ca3 + '\x20' + _0xea661a);
                }
                break;
            case _0x2c2e('‮23d', ')F^j'):
                break;
            default:
                console[_0x2c2e('‫1d5', '&dMV')](_0x388ca3 + _0x2c2e('‮23e', 'pL5G') + _0xea661a);
        }
        if (_0x4d6f96[_0x2c2e('‮23f', 'nVWs')](typeof _0x437f3b, _0x2c2e('‮240', '5GAZ'))) {
            if (_0x437f3b['errorMessage']) {
                if (_0x4d6f96['zoicf'](_0x437f3b[_0x2c2e('‮211', '2ElI')]['indexOf']('火爆'), -0x1)) {
                    $[_0x2c2e('‫37', 'KqvI')] = !![];
                }
            }
        }
    } catch (_0x4334de) {
        if (_0x4d6f96['zzClg'](_0x2c2e('‫241', 'nVWs'), _0x4d6f96[_0x2c2e('‫242', '2ElI')])) {
            console['log'](_0x4334de);
        } else {
            if (_0x437f3b[_0x2c2e('‮1bf', 'W[rY')] && _0x4d6f96[_0x2c2e('‮243', 'Qnpd')](_0x437f3b[_0x2c2e('‮18c', 'wM4Z')], !![])) {
                console[_0x2c2e('‮c0', 'wM4Z')](_0x388ca3 + '\x20' + _0xea661a);
            } else if (_0x437f3b['errorMessage']) {
                console[_0x2c2e('‫244', '#HP(')](_0x388ca3 + '\x20' + (_0x437f3b['errorMessage'] || ''));
            } else {
                console[_0x2c2e('‮69', 'q4TL')](_0x388ca3 + '\x20' + _0xea661a);
            }
        }
    }
}

function getPostRequest(_0x1c4d78, _0x43e997, _0x3bf81c = _0x2c2e('‮245', '@7Zq')) {
    var _0x3f8394 = {
        'tEHeL': _0x2c2e('‮246', 'Qnpd'),
        'utkrt': _0x2c2e('‫247', 's4E['),
        'Yxfqw': _0x2c2e('‫248', 'nVWs'),
        'VBLvP': _0x2c2e('‮249', '8Dup'),
        'Jjkfu': function (_0x31c499, _0x18a580) {
            return _0x31c499 > _0x18a580;
        },
        'WDpMR': _0x2c2e('‫24a', 'S]Iu'),
        'fYSml': _0x2c2e('‫24b', '9*T$'),
        'BDJpl': function (_0x3b2e16, _0x9ae788) {
            return _0x3b2e16 && _0x9ae788;
        },
        'pwfNP': function (_0x401d9b, _0xa49941) {
            return _0x401d9b + _0xa49941;
        },
        'bpgPq': function (_0x37d9a1, _0x320eac) {
            return _0x37d9a1 + _0x320eac;
        }
    };
    let _0x3963f5 = {
        'Accept': _0x2c2e('‫24c', 'Ip[2'),
        'Accept-Encoding': _0x3f8394['tEHeL'],
        'Accept-Language': _0x3f8394[_0x2c2e('‫24d', 'kvDT')],
        'Connection': _0x2c2e('‫24e', 'S]Iu'),
        'Content-Type': _0x3f8394[_0x2c2e('‫24f', 'S]Iu')],
        'Cookie': cookie,
        'User-Agent': $['UA'],
        'X-Requested-With': _0x3f8394[_0x2c2e('‫250', '&dMV')]
    };
    if (_0x3f8394[_0x2c2e('‮251', '8Dup')](_0x1c4d78[_0x2c2e('‫1e6', '8Dup')](_0x3f8394[_0x2c2e('‮252', 'G$W(')]), -0x1)) {
        _0x3963f5['Referer'] = _0x2c2e('‫253', 'wM4Z') + $[_0x2c2e('‮254', '1^ku')] + '&shareUuid=' + $[_0x2c2e('‫255', 'G$W(')];
        _0x3963f5[_0x3f8394['fYSml']] = '' + (_0x3f8394['BDJpl'](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($[_0x2c2e('‫256', '^rt[')] && _0x3f8394['pwfNP'](_0x3f8394[_0x2c2e('‫257', 'lT)R')](_0x2c2e('‮258', '6f]v'), $['Pin']), ';') || '') + activityCookie;
    }
    return {'url': _0x1c4d78, 'method': _0x3bf81c, 'headers': _0x3963f5, 'body': _0x43e997, 'timeout': 0x7530};
}

function getCk() {
    var _0x50a11b = {
        'XItWO': _0x2c2e('‮259', ')F^j'),
        'YsrEV': function (_0x3ec02a, _0x4b541c) {
            return _0x3ec02a != _0x4b541c;
        },
        'cOClq': 'undefined',
        'HDERp': 'WLQhZ',
        'Cuhkb': function (_0x16e30f, _0x5706d4) {
            return _0x16e30f === _0x5706d4;
        },
        'DWrHL': _0x2c2e('‫25a', 'q5Wi'),
        'QTBtv': _0x2c2e('‫25b', '2ElI'),
        'FzdxX': 'GanLz',
        'HqSto': _0x2c2e('‫25c', ')F^j'),
        'uLbhU': function (_0x38df63, _0x596207) {
            return _0x38df63(_0x596207);
        },
        'PtNrB': _0x2c2e('‮25d', 'RFrx'),
        'gOjRd': _0x2c2e('‮25e', 'mHuO'),
        'xsOvr': function (_0x4e63f3) {
            return _0x4e63f3();
        },
        'DSMvT': _0x2c2e('‫25f', 'pL5G'),
        'PpMPo': 'CookieJD2'
    };
    return new Promise(_0x4e92a7 => {
        var _0x13a356 = {
            'GirDy': _0x50a11b['DSMvT'],
            'wccSo': _0x2c2e('‮260', '1^ku'),
            'xOwAx': _0x50a11b[_0x2c2e('‮261', 'KI5W')],
            'pXWUf': function (_0x133425, _0x1a6842) {
                return _0x133425(_0x1a6842);
            },
            'ZMOOc': _0x2c2e('‫262', 'WMJb')
        };
        let _0x1ed370 = {
            'url': _0x2c2e('‮263', 'Svbj') + $['activityId'] + '&shareUuid=' + $['shareUuid'],
            'followRedirect': ![],
            'headers': {'User-Agent': $['UA']},
            'timeout': 0x7530
        };
        $[_0x2c2e('‮264', '1O*#')](_0x1ed370, async (_0xac5f46, _0x233a21, _0x4f69cd) => {
            var _0xdf7d13 = {
                'NaZxD': function (_0x1444fe) {
                    return _0x1444fe();
                }
            };
            try {
                if (_0xac5f46) {
                    if (_0x2c2e('‫265', 'rWAk') !== _0x50a11b['XItWO']) {
                        console[_0x2c2e('‮c3', 'q5Wi')](_0x13a356[_0x2c2e('‮266', '2ElI')]);
                        $[_0x2c2e('‮267', ')F^j')] = !![];
                    } else {
                        if (_0x233a21 && _0x50a11b[_0x2c2e('‫268', '9*T$')](typeof _0x233a21[_0x2c2e('‮269', 'WMJb')], _0x50a11b[_0x2c2e('‮26a', '5GAZ')])) {
                            if (_0x233a21['statusCode'] == 0x1ed) {
                                if (_0x2c2e('‫26b', 's4E[') === _0x50a11b[_0x2c2e('‫26c', 'WMJb')]) {
                                    console[_0x2c2e('‮1c8', 'lT)R')]('此ip已被限制，请过10分钟后再执行脚本\x0a');
                                    $[_0x2c2e('‫26d', '^rt[')] = !![];
                                } else {
                                    _0xdf7d13[_0x2c2e('‮26e', 'WMJb')](_0x4e92a7);
                                }
                            }
                        }
                        console[_0x2c2e('‫31', 'Qnpd')]('' + $[_0x2c2e('‫26f', '1^ku')](_0xac5f46));
                        console[_0x2c2e('‮69', 'q4TL')]($[_0x2c2e('‮270', 'KI5W')] + _0x2c2e('‫271', '@7Zq'));
                    }
                } else {
                    if (_0x50a11b[_0x2c2e('‫272', 'nVWs')]('ctUNG', _0x50a11b['DWrHL'])) {
                        $['joinStatus'] = !![];
                    } else {
                        let _0x544f3d = _0x4f69cd['match'](/(活动已经结束)/) && _0x4f69cd[_0x2c2e('‫273', ')F^j')](/(活动已经结束)/)[0x1] || '';
                        if (_0x544f3d) {
                            if (_0x50a11b['QTBtv'] === _0x50a11b['FzdxX']) {
                                cookiesArr = [$['getdata'](_0x13a356[_0x2c2e('‮274', 'wM4Z')]), $[_0x2c2e('‫275', '&dMV')](_0x13a356[_0x2c2e('‫276', '2ElI')]), ..._0x13a356['pXWUf'](jsonParse, $[_0x2c2e('‮277', '8Dup')](_0x13a356[_0x2c2e('‫278', ']YNQ')]) || '[]')['map'](_0x51ddd9 => _0x51ddd9['cookie'])][_0x2c2e('‫279', '&dMV')](_0x100060 => !!_0x100060);
                            } else {
                                $[_0x2c2e('‮27a', '434k')] = !![];
                                console[_0x2c2e('‫27b', 'KqvI')](_0x50a11b['HqSto']);
                            }
                        }
                        _0x50a11b['uLbhU'](setActivityCookie, _0x233a21);
                    }
                }
            } catch (_0x1ad88c) {
                $['logErr'](_0x1ad88c, _0x233a21);
            } finally {
                if (_0x50a11b[_0x2c2e('‫27c', '4t9D')] !== _0x50a11b['gOjRd']) {
                    _0x50a11b['xsOvr'](_0x4e92a7);
                } else {
                    for (let _0x445f93 of res['result'][_0x2c2e('‮27d', 'Ip[2')][_0x2c2e('‮27e', '@7Zq')]) {
                        console['log'](_0x2c2e('‫27f', ']YNQ') + _0x445f93[_0x2c2e('‫280', 'vp2K')] + _0x445f93[_0x2c2e('‫281', 'KqvI')] + _0x445f93[_0x2c2e('‫282', 'wM4Z')]);
                    }
                }
            }
        });
    });
}

function setActivityCookie(_0x2aee00) {
    var _0x5e9c9d = {
        'iGHmI': 'headers',
        'vxpuk': 'Set-Cookie',
        'KNptB': _0x2c2e('‮283', '#HP('),
        'ghbHc': function (_0x260363, _0x339bc4) {
            return _0x260363 > _0x339bc4;
        },
        'lKLIn': 'LZ_TOKEN_KEY=',
        'UzZMG': function (_0x354066, _0x59254c) {
            return _0x354066 + _0x59254c;
        },
        'CBapt': _0x2c2e('‫284', 'Qnpd'),
        'NxrSl': function (_0x17e5bb, _0x41bb95) {
            return _0x17e5bb + _0x41bb95;
        },
        'kALWa': _0x2c2e('‮285', '^rt['),
        'fjGlw': function (_0xdde21c, _0x850462) {
            return _0xdde21c && _0x850462;
        }
    };
    let _0x4345f3 = '';
    let _0x2a2e14 = '';
    let _0x5e9dfe = '';
    let _0x3d01d3 = _0x2aee00 && _0x2aee00[_0x5e9c9d['iGHmI']] && (_0x2aee00[_0x5e9c9d[_0x2c2e('‮286', 'sxb^')]][_0x2c2e('‫287', 'W[rY')] || _0x2aee00[_0x2c2e('‫288', 'RFrx')][_0x5e9c9d['vxpuk']] || '') || '';
    let _0x656154 = '';
    if (_0x3d01d3) {
        if (typeof _0x3d01d3 != _0x5e9c9d[_0x2c2e('‫289', '4t9D')]) {
            _0x656154 = _0x3d01d3[_0x2c2e('‮28a', '434k')](',');
        } else _0x656154 = _0x3d01d3;
        for (let _0x79a542 of _0x656154) {
            let _0x26e933 = _0x79a542['split'](';')[0x0]['trim']();
            if (_0x26e933[_0x2c2e('‮28b', 'KqvI')]('=')[0x1]) {
                if (_0x5e9c9d['ghbHc'](_0x26e933[_0x2c2e('‫28c', 'S]Iu')](_0x5e9c9d[_0x2c2e('‮28d', 'vp2K')]), -0x1)) _0x4345f3 = _0x5e9c9d[_0x2c2e('‫28e', 'Cok4')](_0x26e933[_0x2c2e('‮28f', 'RFrx')](/ /g, ''), ';');
                if (_0x26e933['indexOf'](_0x5e9c9d[_0x2c2e('‮290', 'mHuO')]) > -0x1) _0x2a2e14 = _0x5e9c9d['NxrSl'](_0x26e933['replace'](/ /g, ''), ';');
                if (_0x26e933['indexOf'](_0x5e9c9d[_0x2c2e('‫291', '4o1W')]) > -0x1) _0x5e9dfe = '' + _0x26e933[_0x2c2e('‫292', '1O*#')](/ /g, '') + ';';
            }
        }
    }
    if (_0x5e9c9d['fjGlw'](_0x4345f3, _0x2a2e14)) activityCookie = _0x4345f3 + '\x20' + _0x2a2e14;
    if (_0x5e9dfe) lz_jdpin_token_cookie = _0x5e9dfe;
}

async function getUA() {
    var _0x2e1866 = {
        'YTvMx': function (_0x3fe783, _0x772f7d) {
            return _0x3fe783(_0x772f7d);
        }
    };
    $['UA'] = _0x2c2e('‮293', 'q5Wi') + _0x2e1866[_0x2c2e('‫294', '9*T$')](randomString, 0x28) + _0x2c2e('‮295', '$x#u');
}

function randomString(_0x279fa2) {
    var _0x4a713b = {
        'FSYRn': _0x2c2e('‮296', '9*T$'), 'XLimh': function (_0x2b31a0, _0x23c3a2) {
            return _0x2b31a0 < _0x23c3a2;
        }
    };
    _0x279fa2 = _0x279fa2 || 0x20;
    let _0x367b6a = _0x4a713b[_0x2c2e('‫297', 'p19q')], _0x56ed7a = _0x367b6a[_0x2c2e('‮298', ')F^j')], _0x27709c = '';
    for (i = 0x0; _0x4a713b[_0x2c2e('‮299', 'kvDT')](i, _0x279fa2); i++) _0x27709c += _0x367b6a[_0x2c2e('‮8e', 'hGVd')](Math[_0x2c2e('‫29a', '9*T$')](Math['random']() * _0x56ed7a));
    return _0x27709c;
}

function random(_0x4c9656, _0x1b8cc3) {
    var _0x42fb74 = {
        'Peuja': function (_0x493cb0, _0x2a249f) {
            return _0x493cb0 + _0x2a249f;
        }, 'rahlc': function (_0x29606b, _0x12a365) {
            return _0x29606b * _0x12a365;
        }, 'xTlqO': function (_0x480c96, _0x346931) {
            return _0x480c96 - _0x346931;
        }
    };
    return _0x42fb74[_0x2c2e('‫29b', '6f]v')](Math[_0x2c2e('‫29c', '2ElI')](_0x42fb74[_0x2c2e('‫29d', 'KqvI')](Math['random'](), _0x42fb74['xTlqO'](_0x1b8cc3, _0x4c9656))), _0x4c9656);
}

function jsonParse(_0x19efa5) {
    var _0x379284 = {
        'rpYdb': _0x2c2e('‮29e', 'vp2K'),
        'DkGPM': 'qQcFH',
        'RRQOH': '请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie'
    };
    if (typeof _0x19efa5 == 'string') {
        if (_0x379284[_0x2c2e('‮29f', 'sT(K')] !== _0x379284[_0x2c2e('‮2a0', 'q4TL')]) {
            try {
                return JSON[_0x2c2e('‫2a1', '9GB9')](_0x19efa5);
            } catch (_0x588d0d) {
                console['log'](_0x588d0d);
                $[_0x2c2e('‫2a2', 'hGVd')]($['name'], '', _0x379284[_0x2c2e('‫2a3', 'q4TL')]);
                return [];
            }
        } else {
            console[_0x2c2e('‫22f', '434k')](type + '\x20' + (res['errorMessage'] || ''));
        }
    }
}

async function joinShop() {
    var _0x4a176e = {
        'hUZLK': function (_0x4a4197, _0x543479) {
            return _0x4a4197 == _0x543479;
        },
        'WsQLN': function (_0x330547, _0x203278) {
            return _0x330547 === _0x203278;
        },
        'gyvtF': function (_0xa6a0e2, _0x947344) {
            return _0xa6a0e2 == _0x947344;
        },
        'inFuU': _0x2c2e('‫2a4', '9*T$'),
        'SKNxy': function (_0x3c7ef1, _0x2c05d9) {
            return _0x3c7ef1 !== _0x2c05d9;
        },
        'oTMHh': function (_0x3fc4c5) {
            return _0x3fc4c5();
        },
        'bSint': _0x2c2e('‫2a5', 'KI5W'),
        'XyhhA': function (_0x44366e, _0xf26943) {
            return _0x44366e != _0xf26943;
        },
        'ienHH': 'aemIp',
        'sEzsL': _0x2c2e('‮2a6', 'lT)R'),
        'DHtrv': _0x2c2e('‫2a7', 'sT(K'),
        'hYLBM': _0x2c2e('‫2a8', 'Svbj'),
        'uwWOZ': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'ahFzD': _0x2c2e('‮2a9', 'kvDT')
    };
    if (!$[_0x2c2e('‮2aa', '@7Zq')]) return;
    return new Promise(async _0x1f89be => {
        var _0x580bba = {
            'YLxue': function (_0x4db70c, _0x8ef0b3) {
                return _0x4db70c == _0x8ef0b3;
            }, 'zTumq': function (_0xb47911, _0xb79c33) {
                return _0xb47911 != _0xb79c33;
            }, 'vaBVl': _0x4a176e['bSint'], 'ddXJI': function (_0x2fff84, _0x51341a) {
                return _0x4a176e[_0x2c2e('‫2ab', 'hGVd')](_0x2fff84, _0x51341a);
            }, 'sKWOE': 'undefined'
        };
        if (_0x4a176e[_0x2c2e('‮2ac', 'W[rY')](_0x4a176e[_0x2c2e('‮2ad', 'ggjG')], _0x4a176e['sEzsL'])) {
            if (_0x580bba[_0x2c2e('‮2ae', '#HP(')](res[_0x2c2e('‮2af', 'lT)R')], 0x0)) {
                if (_0x580bba[_0x2c2e('‫2b0', '9GB9')](typeof res['token'], 'undefined')) $[_0x2c2e('‮2b1', '#HP(')] = res[_0x2c2e('‮2b2', '$x#u')];
            } else if (res[_0x2c2e('‮2b3', '434k')]) {
                console['log'](_0x2c2e('‮2b4', 'Ip[2') + (res[_0x2c2e('‫2b5', ']YNQ')] || ''));
            } else {
                console['log'](data);
            }
        } else {
            $[_0x2c2e('‫2b6', '2ElI')] = _0x4a176e['DHtrv'];
            let _0x53689c = '';
            if ($[_0x2c2e('‮2b7', 'lT)R')]) _0x53689c = ',\x22activityId\x22:' + $['shopactivityId'];
            let _0x1ad857 = _0x2c2e('‮2b8', '2ElI') + $[_0x2c2e('‫2b9', '^rt[')] + _0x2c2e('‫2ba', 'vp2K') + $[_0x2c2e('‫2bb', 'nVWs')] + '\x22,\x22bindByVerifyCodeFlag\x22:1,\x22registerExtend\x22:{},\x22writeChildFlag\x22:0' + _0x53689c + _0x2c2e('‮2bc', '1^ku');
            let _0x4313d1 = '20220412164634306%3Bf5299392a200d6d9ffced997e5790dcc%3B169f1%3Btk02wc0f91c8a18nvWVMGrQO1iFlpQre2Sh2mGtNro1l0UpZqGLRbHiyqfaUQaPy64WT7uz7E%2FgujGAB50kyO7hwByWK%3B77c8a05e6a66faeed00e4e280ad8c40fab60723b5b561230380eb407e19354f7%3B3.0%3B1649753194306';
            const _0x2aebfa = {
                'url': _0x2c2e('‮2bd', '6f]v') + _0x1ad857 + _0x2c2e('‫2be', 'ggjG') + _0x4313d1,
                'headers': {
                    'accept': _0x2c2e('‮2bf', 'pL5G'),
                    'accept-encoding': _0x4a176e['hYLBM'],
                    'accept-language': _0x4a176e[_0x2c2e('‫2c0', 'jmX0')],
                    'cookie': cookie,
                    'origin': _0x2c2e('‮2c1', 'sxb^'),
                    'user-agent': _0x4a176e[_0x2c2e('‫2c2', 'gggv')]
                }
            };
            $[_0x2c2e('‫2c3', 'HJ]P')](_0x2aebfa, async (_0x5229a6, _0x957a39, _0x58b6fa) => {
                try {
                    _0x58b6fa = _0x58b6fa && _0x58b6fa[_0x2c2e('‮2c4', 'p19q')](/jsonp_.*?\((.*?)\);/) && _0x58b6fa[_0x2c2e('‫2c5', '434k')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x58b6fa;
                    let _0x556e42 = $[_0x2c2e('‮2c6', '2ElI')](_0x58b6fa, _0x58b6fa);
                    if (_0x556e42 && _0x4a176e[_0x2c2e('‫2c7', 'sxb^')](typeof _0x556e42, 'object')) {
                        if (_0x556e42 && _0x4a176e[_0x2c2e('‫2c8', 'G$W(')](_0x556e42['success'], !![])) {
                            if (_0x2c2e('‮2c9', '^rt[') !== _0x2c2e('‮2ca', 'pL5G')) {
                                if (_0x580bba[_0x2c2e('‮2cb', 'RFrx')](type, _0x580bba['vaBVl']) || type != 'drawContent') {
                                    if (_0x58b6fa) {
                                        _0x556e42 = JSON[_0x2c2e('‫2cc', '&dMV')](_0x58b6fa);
                                    }
                                }
                            } else {
                                console[_0x2c2e('‫2cd', 'pL5G')](_0x556e42[_0x2c2e('‮2ce', 'KqvI')]);
                                $['errorJoinShop'] = _0x556e42['message'];
                                if (_0x556e42['result'] && _0x556e42[_0x2c2e('‫2cf', '2Jn)')][_0x2c2e('‫2d0', '6f]v')]) {
                                    for (let _0x1d3506 of _0x556e42[_0x2c2e('‫231', 'KI5W')][_0x2c2e('‫2d1', '9*T$')][_0x2c2e('‮2d2', '8Dup')]) {
                                        console[_0x2c2e('‫201', 'RFrx')](_0x2c2e('‫2d3', 'hGVd') + _0x1d3506[_0x2c2e('‮2d4', 'Ip[2')] + _0x1d3506[_0x2c2e('‫2d5', 'Cok4')] + _0x1d3506[_0x2c2e('‫2d6', 'WMJb')]);
                                    }
                                }
                            }
                        } else if (_0x556e42 && _0x4a176e['gyvtF'](typeof _0x556e42, _0x4a176e[_0x2c2e('‮2d7', 'hGVd')]) && _0x556e42[_0x2c2e('‮2d8', '$x#u')]) {
                            $['errorJoinShop'] = _0x556e42[_0x2c2e('‮2d9', 'nVWs')];
                            console['log']('' + (_0x556e42[_0x2c2e('‮2da', '2ElI')] || ''));
                        } else {
                            console['log'](_0x58b6fa);
                        }
                    } else {
                        console[_0x2c2e('‮222', 'vp2K')](_0x58b6fa);
                    }
                } catch (_0x3f840a) {
                    $[_0x2c2e('‮2db', '&dMV')](_0x3f840a, _0x957a39);
                } finally {
                    if (_0x4a176e[_0x2c2e('‫2dc', '6f]v')]('NLTDh', _0x2c2e('‮2dd', 'kvDT'))) {
                        if (res[_0x2c2e('‫2de', 'Ip[2')] && res[_0x2c2e('‮18c', 'wM4Z')] === !![]) {
                            if (res['data'] && _0x580bba[_0x2c2e('‮2df', ')F^j')](typeof res[_0x2c2e('‮2e0', '8Dup')]['yunMidImageUrl'], _0x580bba[_0x2c2e('‮2e1', 'S]Iu')])) $[_0x2c2e('‮2e2', 's4E[')] = res[_0x2c2e('‫1af', '434k')][_0x2c2e('‮2e3', '2Jn)')] || 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                        } else if (res[_0x2c2e('‫2e4', 'nVWs')]) {
                            console['log'](type + '\x20' + (res[_0x2c2e('‫2e5', 'jmX0')] || ''));
                        } else {
                            console['log'](type + '\x20' + _0x58b6fa);
                        }
                    } else {
                        _0x4a176e['oTMHh'](_0x1f89be);
                    }
                }
            });
        }
    });
}

async function getshopactivityId() {
    var _0x29ce3b = {
        'iejip': function (_0x13086d, _0x42ee93) {
            return _0x13086d === _0x42ee93;
        },
        'RFiSI': 'UMdVv',
        'BqUso': function (_0x310047) {
            return _0x310047();
        },
        'MkzhJ': _0x2c2e('‮2e6', 'vp2K'),
        'YGjcU': '*/*',
        'JDaWZ': _0x2c2e('‫2e7', 'nVWs'),
        'RyQGh': 'https://shopmember.m.jd.com/',
        'nMVze': _0x2c2e('‮2e8', '$x#u')
    };
    return new Promise(async _0x4c7dd4 => {
        var _0x5149f4 = {
            'lLwcU': function (_0x1c7999, _0x44c392) {
                return _0x29ce3b[_0x2c2e('‮2e9', 'HJ]P')](_0x1c7999, _0x44c392);
            }, 'sYPyj': _0x29ce3b['RFiSI'], 'AJkmj': _0x2c2e('‮2ea', 'HJ]P'), 'AFUuk': function (_0x4ab3cc, _0x45cc4d) {
                return _0x4ab3cc == _0x45cc4d;
            }, 'prdhB': function (_0x41e4e2) {
                return _0x29ce3b[_0x2c2e('‫2eb', 'sxb^')](_0x41e4e2);
            }
        };
        let _0x380303 = '{\x22venderId\x22:\x22' + $['joinVenderId'] + _0x2c2e('‫2ec', '434k');
        let _0xfedc21 = _0x29ce3b['MkzhJ'];
        const _0x3ddac9 = {
            'url': _0x2c2e('‫2ed', 'pL5G') + _0x380303 + _0x2c2e('‫2ee', '1O*#') + _0xfedc21,
            'headers': {
                'accept': _0x29ce3b[_0x2c2e('‫2ef', 'KI5W')],
                'accept-encoding': 'gzip,\x20deflate,\x20br',
                'accept-language': _0x29ce3b[_0x2c2e('‫2f0', '4o1W')],
                'cookie': cookie,
                'origin': _0x29ce3b['RyQGh'],
                'user-agent': _0x29ce3b['nMVze']
            }
        };
        $['get'](_0x3ddac9, async (_0xb5bd86, _0x5d25e3, _0x3b4024) => {
            try {
                if (_0x5149f4[_0x2c2e('‫2f1', '2Jn)')](_0x5149f4[_0x2c2e('‮2f2', '5GAZ')], _0x5149f4[_0x2c2e('‫2f3', 'sT(K')])) {
                    _0x3b4024 = _0x3b4024 && _0x3b4024['match'](/jsonp_.*?\((.*?)\);/) && _0x3b4024[_0x2c2e('‫2f4', 'Ip[2')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x3b4024;
                    let _0x341eda = $[_0x2c2e('‮2f5', 'Svbj')](_0x3b4024, _0x3b4024);
                    if (_0x341eda && typeof _0x341eda == _0x5149f4[_0x2c2e('‫2f6', 'WMJb')]) {
                        if (_0x341eda && _0x5149f4[_0x2c2e('‮2f7', '9*T$')](_0x341eda['success'], !![])) {
                            console[_0x2c2e('‫2f8', 'hGVd')]('入会:' + (_0x341eda[_0x2c2e('‫2cf', '2Jn)')][_0x2c2e('‫2f9', 'G$W(')][_0x2c2e('‫2fa', 'q4TL')] || ''));
                            $[_0x2c2e('‮2fb', 'HJ]P')] = _0x341eda['result'][_0x2c2e('‮2fc', '9*T$')] && _0x341eda['result'][_0x2c2e('‮2fd', 'kvDT')][0x0] && _0x341eda['result']['interestsRuleList'][0x0][_0x2c2e('‫2fe', ')F^j')] && _0x341eda[_0x2c2e('‫2ff', '6f]v')][_0x2c2e('‫300', '6f]v')][0x0]['interestsInfo'][_0x2c2e('‮301', 'KI5W')] || '';
                        }
                    } else {
                        console['log'](_0x3b4024);
                    }
                } else {
                    console[_0x2c2e('‫302', 'jmX0')](type + '\x20' + _0x3b4024);
                }
            } catch (_0x146487) {
                $['logErr'](_0x146487, _0x5d25e3);
            } finally {
                _0x5149f4[_0x2c2e('‫303', '9*T$')](_0x4c7dd4);
            }
        });
    });
};_0xod9 = 'jsjiami.com.v6';

// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
