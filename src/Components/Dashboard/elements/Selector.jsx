import React from 'react';
import 'antd/dist/antd.css';
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

class Selector extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        multiple
        onChange={this.onChange}
      >
        <TreeNode value="Europe" title="Europe">
          <TreeNode value="AL" title="Albania">Albania</TreeNode>
          <TreeNode value="AD" title="Andorra">Andorra</TreeNode>
          <TreeNode value="AT" title="Austria">Austria</TreeNode>
          <TreeNode value="BY" title="Belarus">Belarus</TreeNode>
          <TreeNode value="BE" title="Belgium">Belgium</TreeNode>
          <TreeNode value="BA" title="Bosnia and Herzegovina">Bosnia and Herzegovina</TreeNode>
          <TreeNode value="BG" title="Bulgaria">Bulgaria</TreeNode>
          <TreeNode value="HR" title="Croatia">Croatia</TreeNode>
          <TreeNode value="CY" title="Cyprus">Cyprus</TreeNode>
          <TreeNode value="CZ" title="Czech Republic">Czech Republic</TreeNode>
          <TreeNode value="DK" title="Denmark">Denmark</TreeNode>
          <TreeNode value="DD" title="East Germany">East Germany</TreeNode>
          <TreeNode value="EE" title="Estonia">Estonia</TreeNode>
          <TreeNode value="FO" title="Faroe Islands">Faroe Islands</TreeNode>
          <TreeNode value="FI" title="Finland">Finland</TreeNode>
          <TreeNode value="FR" title="France">France</TreeNode>
          <TreeNode value="DE" title="Germany">Germany</TreeNode>
          <TreeNode value="GI" title="Gibraltar">Gibraltar</TreeNode>
          <TreeNode value="GR" title="Greece">Greece</TreeNode>
          <TreeNode value="GG" title="Guernsey">Guernsey</TreeNode>
          <TreeNode value="HU" title="Hungary">Hungary</TreeNode>
          <TreeNode value="IS" title="Iceland">Iceland</TreeNode>
          <TreeNode value="IE" title="Ireland">Ireland</TreeNode>
          <TreeNode value="IM" title="Isle of Man">Isle of Man</TreeNode>
          <TreeNode value="IT" title="Italy">Italy</TreeNode>
          <TreeNode value="JE" title="Jersey">Jersey</TreeNode>
          <TreeNode value="LV" title="Latvia">Latvia</TreeNode>
          <TreeNode value="LI" title="Liechtenstein">Liechtenstein</TreeNode>
          <TreeNode value="LT" title="Lithuania">Lithuania</TreeNode>
          <TreeNode value="LU" title="Luxembourg">Luxembourg</TreeNode>
          <TreeNode value="MK" title="Macedonia">Macedonia</TreeNode>
          <TreeNode value="MT" title="Malta">Malta</TreeNode>
          <TreeNode value="FX" title="Metropolitan France">Metropolitan France</TreeNode>
          <TreeNode value="MD" title="Moldova">Moldova</TreeNode>
          <TreeNode value="MC" title="Monaco">Monaco</TreeNode>
          <TreeNode value="ME" title="Montenegro">Montenegro</TreeNode>
          <TreeNode value="NL" title="Netherlands">Netherlands</TreeNode>
          <TreeNode value="NO" title="Norway">Norway</TreeNode>
          <TreeNode value="PL" title="Poland">Poland</TreeNode>
          <TreeNode value="PT" title="Portugal">Portugal</TreeNode>
          <TreeNode value="RO" title="Romania">Romania</TreeNode>
          <TreeNode value="RU" title="Russia">Russia</TreeNode>
          <TreeNode value="SM" title="San Marino">San Marino</TreeNode>
          <TreeNode value="RS" title="Serbia">Serbia</TreeNode>
          <TreeNode value="CS" title="Serbia and Montenegro">Serbia and Montenegro</TreeNode>
          <TreeNode value="SK" title="Slovakia">Slovakia</TreeNode>
          <TreeNode value="SI" title="Slovenia">Slovenia</TreeNode>
          <TreeNode value="ES" title="Spain">Spain</TreeNode>
          <TreeNode value="SJ" title="Svalbard and Jan Mayen">Svalbard and Jan Mayen</TreeNode>
          <TreeNode value="SE" title="Sweden">Sweden</TreeNode>
          <TreeNode value="CH" title="Switzerland">Switzerland</TreeNode>
          <TreeNode value="UA" title="Ukraine">Ukraine</TreeNode>
          <TreeNode value="SU" title="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</TreeNode>
          <TreeNode value="GB" title="United Kingdom">United Kingdom</TreeNode>
          <TreeNode value="VA" title="Vatican City">Vatican City</TreeNode>
          <TreeNode value="AX" title="Åland Islands">Åland Islands</TreeNode>
        </TreeNode>
        <TreeNode value="America" title="America">
          <TreeNode value="AI" title="Anguilla">Anguilla</TreeNode>
          <TreeNode value="AG" title="Antigua and Barbuda">Antigua and Barbuda</TreeNode>
          <TreeNode value="AR" title="Argentina">Argentina</TreeNode>
          <TreeNode value="AW" title="Aruba">Aruba</TreeNode>
          <TreeNode value="BS" title="Bahamas">Bahamas</TreeNode>
          <TreeNode value="BB" title="Barbados">Barbados</TreeNode>
          <TreeNode value="BZ" title="Belize">Belize</TreeNode>
          <TreeNode value="BM" title="Bermuda">Bermuda</TreeNode>
          <TreeNode value="BO" title="Bolivia">Bolivia</TreeNode>
          <TreeNode value="BR" title="Brazil">Brazil</TreeNode>
          <TreeNode value="VG" title="British Virgin Islands">British Virgin Islands</TreeNode>
          <TreeNode value="CA" title="Canada">Canada</TreeNode>
          <TreeNode value="KY" title="Cayman Islands">Cayman Islands</TreeNode>
          <TreeNode value="CL" title="Chile">Chile</TreeNode>
          <TreeNode value="CO" title="Colombia">Colombia</TreeNode>
          <TreeNode value="CR" title="Costa Rica">Costa Rica</TreeNode>
          <TreeNode value="CU" title="Cuba">Cuba</TreeNode>
          <TreeNode value="DM" title="Dominica">Dominica</TreeNode>
          <TreeNode value="DO" title="Dominican Republic">Dominican Republic</TreeNode>
          <TreeNode value="EC" title="Ecuador">Ecuador</TreeNode>
          <TreeNode value="SV" title="El Salvador">El Salvador</TreeNode>
          <TreeNode value="FK" title="Falkland Islands">Falkland Islands</TreeNode>
          <TreeNode value="GF" title="French Guiana">French Guiana</TreeNode>
          <TreeNode value="GL" title="Greenland">Greenland</TreeNode>
          <TreeNode value="GD" title="Grenada">Grenada</TreeNode>
          <TreeNode value="GP" title="Guadeloupe">Guadeloupe</TreeNode>
          <TreeNode value="GT" title="Guatemala">Guatemala</TreeNode>
          <TreeNode value="GY" title="Guyana">Guyana</TreeNode>
          <TreeNode value="HT" title="Haiti">Haiti</TreeNode>
          <TreeNode value="HN" title="Honduras">Honduras</TreeNode>
          <TreeNode value="JM" title="Jamaica">Jamaica</TreeNode>
          <TreeNode value="MQ" title="Martinique">Martinique</TreeNode>
          <TreeNode value="MX" title="Mexico">Mexico</TreeNode>
          <TreeNode value="MS" title="Montserrat">Montserrat</TreeNode>
          <TreeNode value="AN" title="Netherlands Antilles">Netherlands Antilles</TreeNode>
          <TreeNode value="NI" title="Nicaragua">Nicaragua</TreeNode>
          <TreeNode value="PA" title="Panama">Panama</TreeNode>
          <TreeNode value="PY" title="Paraguay">Paraguay</TreeNode>
          <TreeNode value="PE" title="Peru">Peru</TreeNode>
          <TreeNode value="PR" title="Puerto Rico">Puerto Rico</TreeNode>
          <TreeNode value="BL" title="Saint Barthélemy">Saint Barthélemy</TreeNode>
          <TreeNode value="KN" title="Saint Kitts and Nevis">Saint Kitts and Nevis</TreeNode>
          <TreeNode value="LC" title="Saint Lucia">Saint Lucia</TreeNode>
          <TreeNode value="MF" title="Saint Martin">Saint Martin</TreeNode>
          <TreeNode value="PM" title="Saint Pierre and Miquelon">Saint Pierre and Miquelon</TreeNode>
          <TreeNode value="VC" title="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</TreeNode>
          <TreeNode value="SR" title="Suriname">Suriname</TreeNode>
          <TreeNode value="TT" title="Trinidad and Tobago">Trinidad and Tobago</TreeNode>
          <TreeNode value="TC" title="Turks and Caicos Islands">Turks and Caicos Islands</TreeNode>
          <TreeNode value="VI" title="U.S. Virgin Islands">U.S. Virgin Islands</TreeNode>
          <TreeNode value="US" title="United States">United States</TreeNode>
          <TreeNode value="UY" title="Uruguay">Uruguay</TreeNode>
          <TreeNode value="VE" title="Venezuela">Venezuela</TreeNode>
        </TreeNode>
        <TreeNode value="Asia" title="Asia">
          <TreeNode value="AF" title="Afghanistan">Afghanistan</TreeNode>
          <TreeNode value="AM" title="Armenia">Armenia</TreeNode>
          <TreeNode value="AZ" title="Azerbaijan">Azerbaijan</TreeNode>
          <TreeNode value="BH" title="Bahrain">Bahrain</TreeNode>
          <TreeNode value="BD" title="Bangladesh">Bangladesh</TreeNode>
          <TreeNode value="BT" title="Bhutan">Bhutan</TreeNode>
          <TreeNode value="BN" title="Brunei">Brunei</TreeNode>
          <TreeNode value="KH" title="Cambodia">Cambodia</TreeNode>
          <TreeNode value="CN" title="China">China</TreeNode>
          <TreeNode value="CY" title="Cyprus">Cyprus</TreeNode>
          <TreeNode value="GE" title="Georgia">Georgia</TreeNode>
          <TreeNode value="HK" title="Hong Kong SAR China">Hong Kong SAR China</TreeNode>
          <TreeNode value="IN" title="India">India</TreeNode>
          <TreeNode value="ID" title="Indonesia">Indonesia</TreeNode>
          <TreeNode value="IR" title="Iran">Iran</TreeNode>
          <TreeNode value="IQ" title="Iraq">Iraq</TreeNode>
          <TreeNode value="IL" title="Israel">Israel</TreeNode>
          <TreeNode value="JP" title="Japan">Japan</TreeNode>
          <TreeNode value="JO" title="Jordan">Jordan</TreeNode>
          <TreeNode value="KZ" title="Kazakhstan">Kazakhstan</TreeNode>
          <TreeNode value="KW" title="Kuwait">Kuwait</TreeNode>
          <TreeNode value="KG" title="Kyrgyzstan">Kyrgyzstan</TreeNode>
          <TreeNode value="LA" title="Laos">Laos</TreeNode>
          <TreeNode value="LB" title="Lebanon">Lebanon</TreeNode>
          <TreeNode value="MO" title="Macau SAR China">Macau SAR China</TreeNode>
          <TreeNode value="MY" title="Malaysia">Malaysia</TreeNode>
          <TreeNode value="MV" title="Maldives">Maldives</TreeNode>
          <TreeNode value="MN" title="Mongolia">Mongolia</TreeNode>
          <TreeNode value="MM" title="Myanmar [Burma]">Myanmar [Burma]</TreeNode>
          <TreeNode value="NP" title="Nepal">Nepal</TreeNode>
          <TreeNode value="NT" title="Neutral Zone">Neutral Zone</TreeNode>
          <TreeNode value="KP" title="North Korea">North Korea</TreeNode>
          <TreeNode value="OM" title="Oman">Oman</TreeNode>
          <TreeNode value="PK" title="Pakistan">Pakistan</TreeNode>
          <TreeNode value="PS" title="Palestinian Territories">Palestinian Territories</TreeNode>
          <TreeNode value="YD" title="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</TreeNode>
          <TreeNode value="PH" title="Philippines">Philippines</TreeNode>
          <TreeNode value="QA" title="Qatar">Qatar</TreeNode>
          <TreeNode value="SA" title="Saudi Arabia">Saudi Arabia</TreeNode>
          <TreeNode value="SG" title="Singapore">Singapore</TreeNode>
          <TreeNode value="KR" title="South Korea">South Korea</TreeNode>
          <TreeNode value="LK" title="Sri Lanka">Sri Lanka</TreeNode>
          <TreeNode value="SY" title="Syria">Syria</TreeNode>
          <TreeNode value="TW" title="Taiwan">Taiwan</TreeNode>
          <TreeNode value="TJ" title="Tajikistan">Tajikistan</TreeNode>
          <TreeNode value="TH" title="Thailand">Thailand</TreeNode>
          <TreeNode value="TL" title="Timor-Leste">Timor-Leste</TreeNode>
          <TreeNode value="TR" title="Turkey">Turkey</TreeNode>
          <TreeNode value="™" title="Turkmenistan">Turkmenistan</TreeNode>
          <TreeNode value="AE" title="United Arab Emirates">United Arab Emirates</TreeNode>
          <TreeNode value="UZ" title="Uzbekistan">Uzbekistan</TreeNode>
          <TreeNode value="VN" title="Vietnam">Vietnam</TreeNode>
          <TreeNode value="YE" title="Yemen">Yemen</TreeNode>
        </TreeNode>
        <TreeNode value="Africa" title="Africa">
          <TreeNode value="DZ" title="Algeria">Algeria</TreeNode>
          <TreeNode value="AO" title="Angola">Angola</TreeNode>
          <TreeNode value="BJ" title="Benin">Benin</TreeNode>
          <TreeNode value="BW" title="Botswana">Botswana</TreeNode>
          <TreeNode value="BF" title="Burkina Faso">Burkina Faso</TreeNode>
          <TreeNode value="BI" title="Burundi">Burundi</TreeNode>
          <TreeNode value="CM" title="Cameroon">Cameroon</TreeNode>
          <TreeNode value="CV" title="Cape Verde">Cape Verde</TreeNode>
          <TreeNode value="CF" title="Central African Republic">Central African Republic</TreeNode>
          <TreeNode value="TD" title="Chad">Chad</TreeNode>
          <TreeNode value="KM" title="Comoros">Comoros</TreeNode>
          <TreeNode value="CG" title="Congo - Brazzaville">Congo - Brazzaville</TreeNode>
          <TreeNode value="CD" title="Congo - Kinshasa">Congo - Kinshasa</TreeNode>
          <TreeNode value="CI" title="Côte d’Ivoire">Côte d’Ivoire</TreeNode>
          <TreeNode value="DJ" title="Djibouti">Djibouti</TreeNode>
          <TreeNode value="EG" title="Egypt">Egypt</TreeNode>
          <TreeNode value="GQ" title="Equatorial Guinea">Equatorial Guinea</TreeNode>
          <TreeNode value="ER" title="Eritrea">Eritrea</TreeNode>
          <TreeNode value="ET" title="Ethiopia">Ethiopia</TreeNode>
          <TreeNode value="GA" title="Gabon">Gabon</TreeNode>
          <TreeNode value="GM" title="Gambia">Gambia</TreeNode>
          <TreeNode value="GH" title="Ghana">Ghana</TreeNode>
          <TreeNode value="GN" title="Guinea">Guinea</TreeNode>
          <TreeNode value="GW" title="Guinea-Bissau">Guinea-Bissau</TreeNode>
          <TreeNode value="KE" title="Kenya">Kenya</TreeNode>
          <TreeNode value="LS" title="Lesotho">Lesotho</TreeNode>
          <TreeNode value="LR" title="Liberia">Liberia</TreeNode>
          <TreeNode value="LY" title="Libya">Libya</TreeNode>
          <TreeNode value="MG" title="Madagascar">Madagascar</TreeNode>
          <TreeNode value="MW" title="Malawi">Malawi</TreeNode>
          <TreeNode value="ML" title="Mali">Mali</TreeNode>
          <TreeNode value="MR" title="Mauritania">Mauritania</TreeNode>
          <TreeNode value="MU" title="Mauritius">Mauritius</TreeNode>
          <TreeNode value="YT" title="Mayotte">Mayotte</TreeNode>
          <TreeNode value="MA" title="Morocco">Morocco</TreeNode>
          <TreeNode value="MZ" title="Mozambique">Mozambique</TreeNode>
          <TreeNode value="NA" title="Namibia">Namibia</TreeNode>
          <TreeNode value="NE" title="Niger">Niger</TreeNode>
          <TreeNode value="NG" title="Nigeria">Nigeria</TreeNode>
          <TreeNode value="RW" title="Rwanda">Rwanda</TreeNode>
          <TreeNode value="RE" title="Réunion">Réunion</TreeNode>
          <TreeNode value="SH" title="Saint Helena">Saint Helena</TreeNode>
          <TreeNode value="SN" title="Senegal">Senegal</TreeNode>
          <TreeNode value="SC" title="Seychelles">Seychelles</TreeNode>
          <TreeNode value="SL" title="Sierra Leone">Sierra Leone</TreeNode>
          <TreeNode value="SO" title="Somalia">Somalia</TreeNode>
          <TreeNode value="ZA" title="South Africa">South Africa</TreeNode>
          <TreeNode value="SD" title="Sudan">Sudan</TreeNode>
          <TreeNode value="SZ" title="Swaziland">Swaziland</TreeNode>
          <TreeNode value="ST" title="São Tomé and Príncipe">São Tomé and Príncipe</TreeNode>
          <TreeNode value="TZ" title="Tanzania">Tanzania</TreeNode>
          <TreeNode value="TG" title="Togo">Togo</TreeNode>
          <TreeNode value="TN" title="Tunisia">Tunisia</TreeNode>
          <TreeNode value="UG" title="Uganda">Uganda</TreeNode>
          <TreeNode value="EH" title="Western Sahara">Western Sahara</TreeNode>
          <TreeNode value="ZM" title="Zambia">Zambia</TreeNode>
          <TreeNode value="ZW" title="Zimbabwe">Zimbabwe</TreeNode>
        </TreeNode>
        <TreeNode value="Oceania" title="Oceania">
          <TreeNode value="AS" title="American Samoa">American Samoa</TreeNode>
          <TreeNode value="AQ" title="Antarctica">Antarctica</TreeNode>
          <TreeNode value="AU" title="Australia">Australia</TreeNode>
          <TreeNode value="BV" title="Bouvet Island">Bouvet Island</TreeNode>
          <TreeNode value="IO" title="British Indian Ocean Territory">British Indian Ocean Territory</TreeNode>
          <TreeNode value="CX" title="Christmas Island">Christmas Island</TreeNode>
          <TreeNode value="CC" title="Cocos [Keeling] Islands">Cocos [Keeling] Islands</TreeNode>
          <TreeNode value="CK" title="Cook Islands">Cook Islands</TreeNode>
          <TreeNode value="FJ" title="Fiji">Fiji</TreeNode>
          <TreeNode value="PF" title="French Polynesia">French Polynesia</TreeNode>
          <TreeNode value="TF" title="French Southern Territories">French Southern Territories</TreeNode>
          <TreeNode value="GU" title="Guam">Guam</TreeNode>
          <TreeNode value="HM" title="Heard Island and McDonald Islands">Heard Island and McDonald Islands</TreeNode>
          <TreeNode value="KI" title="Kiribati">Kiribati</TreeNode>
          <TreeNode value="MH" title="Marshall Islands">Marshall Islands</TreeNode>
          <TreeNode value="FM" title="Micronesia">Micronesia</TreeNode>
          <TreeNode value="NR" title="Nauru">Nauru</TreeNode>
          <TreeNode value="NC" title="New Caledonia">New Caledonia</TreeNode>
          <TreeNode value="NZ" title="New Zealand">New Zealand</TreeNode>
          <TreeNode value="NU" title="Niue">Niue</TreeNode>
          <TreeNode value="NF" title="Norfolk Island">Norfolk Island</TreeNode>
          <TreeNode value="MP" title="Northern Mariana Islands">Northern Mariana Islands</TreeNode>
          <TreeNode value="PW" title="Palau">Palau</TreeNode>
          <TreeNode value="PG" title="Papua New Guinea">Papua New Guinea</TreeNode>
          <TreeNode value="PN" title="Pitcairn Islands">Pitcairn Islands</TreeNode>
          <TreeNode value="WS" title="Samoa">Samoa</TreeNode>
          <TreeNode value="SB" title="Solomon Islands">Solomon Islands</TreeNode>
          <TreeNode value="GS" title="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</TreeNode>
          <TreeNode value="TK" title="Tokelau">Tokelau</TreeNode>
          <TreeNode value="TO" title="Tonga">Tonga</TreeNode>
          <TreeNode value="TV" title="Tuvalu">Tuvalu</TreeNode>
          <TreeNode value="UM" title="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</TreeNode>
          <TreeNode value="VU" title="Vanuatu">Vanuatu</TreeNode>
          <TreeNode value="WF" title="Wallis and Futuna">Wallis and Futuna</TreeNode>
        </TreeNode>
        <TreeNode value="EuropeStores" title="Europe Stores">
          <TreeNode value="FTLEU" title="Footlocker EU"></TreeNode>
          <TreeNode value="BSTN" title="BSTN"></TreeNode>
          <TreeNode value="SupremeEU" title="Supreme EU"></TreeNode>
          <TreeNode value="Solebox" title="Solebox"></TreeNode>
        </TreeNode>
        <TreeNode value="USAStores" title="USA Stores">
          <TreeNode value="Champs" title="Champs"></TreeNode>
          <TreeNode value="Shopify" title="Shopify"></TreeNode>
          <TreeNode value="SupremeUS" title="Supreme US"></TreeNode>
          <TreeNode value="" title="YeezySupply"></TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}

export default Selector;