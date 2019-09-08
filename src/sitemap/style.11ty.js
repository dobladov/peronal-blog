const { cssmin } = require('../_includes/common')

const style = cssmin(`
  body {
    background-color: #F5F5F5;
    font-size: calc(16px + .5vw);
    font-family: futura-pt,sans-serif,sans-serif;
    color: #3c3c3c;
  }

  a {
    color: #3c3c3c;
    text-decoration: none;
    background-image: linear-gradient(#7eb530, #7eb530);
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: left 0 bottom -45%;
  }

  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5rem;
  }

  table {
    border: none;
    border-collapse: collapse;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }

  tbody tr:hover {
    background-color: #ccc;
  }

  a:visited {
    color: #777;
  }
  
  td {
    font-size:14px;
  }

  th {
    text-align:left;
    padding-right:30px;
    font-size:12px;
  }

  thead th {
    border-bottom: 1px solid #000;
  }

  h1 a {
    background: none;
  }
`)

class sitemap {
  async data () {
    return {
      permalink: '/sitemap.xsl',
      sitemapIgnore: true
    }
  }

  render ({ collections, env }) {
    return `
    <xsl:stylesheet version="2.0" 
      xmlns:html="http://www.w3.org/TR/REC-html40"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >
      <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
      <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <title>Sitemap | ${env.title}</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            
            <style type="text/css">
              ${style}
            </style>
          </head>
          <body>
            <div class="wrapper">
              <h1>
                <a href="/">
                  XML Sitemap
                </a>
              </h1>
              <table id="sitemap" cellpadding="3">
                <thead>
                  <tr>
                    <th width="75%">
                      URL (<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> total)
                    </th>
                    <th width="5%">Priority</th>
                    <th width="5%">Images</th>
                    <th width="5%">Change Freq.</th>
                    <th width="10%">Last Change</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                  <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
                      </td>
                      <td>
                        <xsl:value-of select="count(image:image)"/>
                      </td>
                      <td>
                        <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </body>
        </html>
      </xsl:template>
    </xsl:stylesheet>
    `
  }
}

module.exports = sitemap
