---
sidebar: auto
---

# 1. Setup a Zaikio App

## Setup developer account

To be able to manage apps you must first create a personal account and an organisation in [Zaikio sandbox](https://hub.sandbox.zaikio.com). Make sure that the kind of your organisation is **Software Developer** and that you have the admin role in that organisation.

Afterwards you can access **My Apps** in the sidebar.

## Create App

<div class="browser-mockup" data-url="https://hub.zaikio.com">

![Create App](./create_app.png)

</div>

### Types of Zaikio Apps

The integration with the Zaikio platform can be done in different ways. Depending on the requirements of your app, different approaches are possible. First of all you have to decide which type of app is right for you. We distinguish between **public** and **private** apps.

<div style="display:flex">
  <div style="width:50%;margin-right:25px;">

#### Public apps (recommended)

<ul>
<li>Different organisations and people can connect</li>
<li>Must go through Zaikio's app approval process</li>
<li>Can be listed in Zaikio's connectivity hub and can receive payments/subscriptions</li>
</ul>

  </div>
  <div style="width:50%;margin-left:25px;">

#### Private apps

<ul>
<li>Only invited organisations and its members can connect</li>
<li>Don't go through Zaikio's app approval process</li>
<li>Can't be listed in Zaikio's connectivity hub</li>
</ul>

  </div>
</div>

#### Both types

<div style="display:flex">
  <div style="width:50%;margin-right:25px;"><br>
    ✔ Can be accessed through the Zaikio launchpad<br><br>
    ✔ Can consume APIs and events of other published apps
  </div>

  <div style="width:50%;margin-left:25px;"><br>
    ✔ Manage authentication with <strong>OAuth 2.0</strong><br><br>
    ✔ Can offer APIs and events to other Zaikio apps
  </div>
</div>
<br>

### Name

The technical name is used in a variety of areas. The same name can only be used once within Zaikio and is therefore a unique identifier. The name is used in the following areas:

- [JSON Web Tokens](/guide/jwt/) generated with your client credentials will include it as the `aud` attribute in the payload.
- It is used for OAuth scopes that you offer for your API.
- It is used for Events that you offer for your app.

### Default title

This name is the English name of your app and will be visible to your customers in Zaikio. You can translate the name and other attributes into several languages (within the **Translations** tab).

### Category

The category is used to easily find your app in the App Store.

<div style="text-align:right;margin-top: 30px;">

[Continue to integrate the Zaikio SSO ➞](./sso-person.html)

</div>