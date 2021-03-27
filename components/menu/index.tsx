import React from "react";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";

function Menu() {
  return (
    <Section>
      <SectionTitle>Menu</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <table className='md:mr-3'>
          <caption>All you can eat</caption>
          <tbody>
            <tr>
              <th>
                <p>Lunch</p>
                <p>Open - 4:00 pm</p>
              </th>
              <td>$9.95</td>
            </tr>
            <tr>
              <th>
                <p>Dinner</p>
                <p>4:00 pm - Close</p>
              </th>
              <td>$12.95</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Children</caption>
          <tbody>
            <tr>
              <th>
                <p>Under 3 years old</p>
              </th>
              <td>Free</td>
            </tr>
            <tr>
              <th>
                <p>3 to 10 years old</p>
              </th>
              <td>$5.95</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Carry Out</caption>
          <tbody>
            <tr>
              <td>$8.49 per bowl</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Drinks</caption>
          <tbody>
            <tr>
              <th>Soft Drinks</th>
              <td>$2.95</td>
            </tr>
            <tr>
              <th>
                <p>Juice</p>
                <p>No refills</p>
              </th>
              <td>$2.25</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>Other</caption>
          <tbody>
            <tr>
              <th>
                <p>Tortillas</p>
                <p>Order of 4</p>
              </th>
              <td>$1.50</td>
            </tr>
            <tr>
              <th>
                <p>Yum-Yum Sauce</p>
                <p>First 2 free per customer</p>
              </th>
              <td>$0.25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export default Menu;
