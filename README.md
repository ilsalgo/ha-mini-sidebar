# ha-mini-sidebar

Upon every page load, this code minimizes the sidebar (it does not hide it) as the default setting for all users.

1. Create the config/www/sidebar-default.js file  
2.  Load it into the configuration.yaml:  
   ```python
      frontend:
        extra_module_url:  
          - /local/sidebar-default.js
   ```
