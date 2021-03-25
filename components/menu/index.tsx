import React from "react";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";

function Menu() {
  return (
    <Section id="menu">
      <SectionTitle>Menu</SectionTitle>
      <table>
        <tbody>
          <tr>
            <th>Lunch (Open - 4:00 pm)</th>
            <td>$9.95</td>
          </tr>
          <tr>
            <th>Dinner (4:00 pm - Close)</th>
            <td>$12.95</td>
          </tr>
          <tr>
            <th>Children under 3 years old</th>
            <td>Free</td>
          </tr>
          <tr>
            <th>Children 3 to 10 years old</th>
            <td>$5.95</td>
          </tr>
          <tr>
            <th>Soft Drinks</th>
            <td>$2.95</td>
          </tr>
          <tr>
            <th>Juice no refills</th>
            <td>$2.25</td>
          </tr>
          <tr>
            <th>Tortillas order of 4</th>
            <td>$1.50</td>
          </tr>
          <tr>
            <th>Yum-Yum Sauce first 2 free</th>
            <td>$0.25</td>
          </tr>
          <tr>
            <th>Carry out charged per bowl</th>
            <td>$8.49</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

export default Menu;
